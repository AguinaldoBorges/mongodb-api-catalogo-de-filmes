const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movieRoutes');

const app = express();

app.use(express.json());
app.use('/movies', movieRoutes);

mongoose.connect('mongodb+srv://root:1234@guinanews.lftlup9.mongodb.net/?retryWrites=true&w=majority&appName=GuinaNews', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
});

module.exports = app;
