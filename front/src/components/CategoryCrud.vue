<template>
    <v-container>
      <v-row>
        <!-- Formulaire d'add-->
        <v-col cols="12" md="6">
          <v-card class="pa-4">
            <v-card-title>Ajouter une catégorie</v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="formValid" @submit.prevent="addCategory">
                <v-text-field
                  label="Nom de la catégorie"
                  v-model="newCategory.name"
                  :rules="nameRules"
                  required
                ></v-text-field>
                <v-btn :disabled="!formValid" color="primary" type="submit">
                  Ajouter
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
  
        <!-- tableau des catégories -->
        <v-col cols="12" md="6">
          <v-card class="pa-4">
            <v-card-title>Liste des catégories</v-card-title>
            <v-data-table
              :headers="headers"
              :items="categories"
              class="elevation-1"
              item-key="id"
            >
              <template v-slot:["item.actions"]="{ item }">
                <v-icon small class="mr-2" @click="openEditDialog(item)">
                  mdi-pencil
                </v-icon>
                <v-icon small @click="removeCategory(item)">
                  mdi-delete
                </v-icon>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- dialog pour la modif d'une catégorie -->
      <v-dialog v-model="editDialog" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Modifier la catégorie</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="editForm" v-model="editFormValid">
              <v-text-field
                label="Nom de la catégorie"
                v-model="editedCategory.name"
                :rules="nameRules"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeEditDialog">
              Annuler
            </v-btn>
            <v-btn color="blue darken-1" text @click="updateCategory" :disabled="!editFormValid">
              Sauvegarder
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'CategoryCrud',
    data() {
      return {
        categories: [],
        newCategory: {
          name: ''
        },
        formValid: false,
        editDialog: false,
        editFormValid: false,
        editedCategory: {
          id: null,
          name: ''
        },
        nameRules: [
          v => !!v || 'Le nom est requis',
          v => (v && v.trim().length > 0) || 'Le nom ne peut être vide'
        ],
        headers: [
          { text: 'ID', value: 'id' },
          { text: 'Nom', value: 'name' },
          { text: 'Actions', value: 'actions', sortable: false }
        ],
        apiBaseUrl: 'http://localhost:3000/api'
      };
    },
    methods: {
      //recupere toutes les catégories via le back end
      async getCategories() {
        try {
          const response = await axios.get(`${this.apiBaseUrl}/categories`);
          this.categories = response.data;
        } catch (error) {
          console.error("erreur getAll cat :", error);
        }
      },
      //add catégorie
      async addCategory() {
        if (!this.$refs.form.validate()) return;
        try {
          const response = await axios.post(`${this.apiBaseUrl}/categories`, this.newCategory);
          this.categories.push(response.data);
          this.newCategory.name = '';
          this.$refs.form.reset();
        } catch (error) {
          console.error("erreur add cat :", error);
        }
      },
      //del catégorie
      async removeCategory(item) {
        if (!confirm(`Supprimer la catégorie "${item.name}" ?`)) return;
        try {
          await axios.delete(`${this.apiBaseUrl}/categories/${item.id}`);
          this.categories = this.categories.filter(cat => cat.id !== item.id);
        } catch (error) {
          console.error("erreur del cat :", error);
        }
      },
      //ouvre la boite de dialogue
      openEditDialog(category) {
        this.editedCategory = { ...category };
        this.editDialog = true;
      },
      //ferme la boite de dialogue
      closeEditDialog() {
        this.editDialog = false;
        if (this.$refs.editForm) {
          this.$refs.editForm.reset();
        }
      },
      //maj requete PUT
      async updateCategory() {
        if (!this.$refs.editForm.validate()) return;
        try {
          const response = await axios.put(`${this.apiBaseUrl}/categories/${this.editedCategory.id}`, {
            name: this.editedCategory.name
          });
          //maj local
          const index = this.categories.findIndex(cat => cat.id === this.editedCategory.id);
          if (index !== -1) {
            this.categories.splice(index, 1, response.data);
          }
          this.closeEditDialog();
        } catch (error) {
          console.error("erreur maj cat :", error);
        }
      }
    },
    mounted() {
      this.getCategories();
    }
  };
  </script>
  
  <style scoped>
  </style>
  