const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const port = process.env.PORT || 3000;

//sécu
app.use(helmet());
//autoriser les requetes depuis le front
app.use(cors());
app.use(express.json());

//stockage en mémoire
let categories = [];
let currentId = 1;

//endpoints
//GET
app.get('/api/categories', (req, res) => {
  res.json(categories);
});

//POST
app.post('/api/categories', (req, res) => {
  const { name } = req.body;
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'Le nom de la catégorie est requis et doit être une chaîne non vide' });
  }

  const newCategory = {
    id: currentId++,
    name: name.trim()
  };
  categories.push(newCategory);
  res.status(201).json(newCategory);
});

//PUT
app.put('/api/categories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const category = categories.find(cat => cat.id === id);
  if (!category) {
    return res.status(404).json({ error: 'cat non trouvée' });
  }
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'Le nom de la catégorie est requis et doit être une chaîne non vide' });
  }
  category.name = name.trim();
  res.json(category);
});

//DELETE
app.delete('/api/categories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = categories.findIndex(cat => cat.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'cat non trouvée' });
  }
  const deletedCategory = categories.splice(index, 1);
  res.json(deletedCategory[0]);
});


app.listen(port, () => {
  console.log(`port serveur back : ${port}`);
});
