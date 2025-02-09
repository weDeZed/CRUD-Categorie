Ce projet est une application d'administration permettant de gérer les catégories d'une application via un système CRUD. Il se compose d'un back-end en Node.js/Express et d'un front-end en Vue.js avec Vuetify.

## Sommaire

- [Prérequis](#prérequis)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
  - [Clonage du dépôt](#clonage-du-dépôt)
  - [Installation des dépendances](#installation-des-dépendances)
- [Configuration](#configuration)
- [Lancer l'application](#lancer-lapplication)
  - [Démarrer le back-end](#démarrer-le-back-end)
  - [Démarrer le front-end](#démarrer-le-front-end)
- [Utilisation](#utilisation)
- [Remarques](#remarques)

## <a id="prérequis"></a>Prérequis

- [Node.js](https://nodejs.org) (version LTS recommandée)
- npm (installé avec Node.js)
- [Vue CLI](https://cli.vuejs.org/) 

## <a id="structure-du-projet"></a>Structure du projet

Le projet est organisé de la manière suivante :

```
mon-projet/
├── back/          #back-end : API Node.js avec Express
└── front/         #front-end : application Vue.js avec Vuetify
└── maquette/      #mid-fi de l'application
```

## <a id="installation"></a>Installation

### <a id="clonage-du-dépôt"></a>Clonage du dépôt

Clonez le dépôt sur votre machine :

```bash
git clone https://github.com/weDeZed/CRUD-Categorie.git
cd mon-projet
```

### <a id="installation-des-dépendances"></a>Installation des dépendances

#### a) Back-end

1. Rendez-vous dans le dossier `back` :

   ```bash
   cd back
   ```

2. Installez les dépendances Node.js :

   ```bash
   npm install
   ```

#### b) Front-end

1. Rendez-vous dans le dossier `front` :

   ```bash
   cd ../front
   ```

2. Installez les dépendances Node.js :

   ```bash
   npm install
   ```

## <a id="configuration"></a>Configuration

Aucune configuration particulière n'est nécessaire pour démarrer, si vous souhaitez modifier l'URL de l'API, vous pouvez directement éditer les fichiers.

## <a id="lancer-lapplication"></a>Lancer l'application

### <a id="démarrer-le-back-end"></a>Démarrer le back-end

Dans le dossier `back`, lancez le serveur avec :

```bash
npm run dev
```

Le serveur Express se lancera sur le port **3000** par défaut et affichera le message:  
`port serveur back : 3000`.

### <a id="démarrer-le-front-end"></a>Démarrer le front-end

Dans le dossier `front`, lancez l'application Vue.js avec :

```bash
npm run serve
```

L'application sera disponible par défaut à l'adresse :  
[http://localhost:8080](http://localhost:8080)

## <a id="utilisation"></a>Utilisation

- **Ajouter une catégorie :**  
  Utilisez le formulaire sur la partie gauche de l'interface pour ajouter une nouvelle catégorie.

- **Modifier une catégorie :**  
  Cliquez sur l'icône de crayon dans la liste des catégories pour ouvrir une fenêtre de dialogue et modifier le nom de la catégorie.

- **Supprimer une catégorie :**  
  Cliquez sur l'icône de la corbeille pour supprimer la catégorie correspondante.



## <a id="remarques"></a>Remarques

- Ce projet utilise un stockage en mémoire pour la gestion des catégories.
- Assurez-vous que les ports utilisés (3000 pour le back-end et 8080 pour le front-end) ne sont pas bloqués par votre pare-feu ou utilisés par d'autres applications.
```

