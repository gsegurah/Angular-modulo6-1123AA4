//database.js
const mongoose = require('mongoose');
const URI = 'mongodb+srv://gseguraher:usNrHo15g1mbHBGM@cluster0.jicfvuv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// Asegúrate de que esta URI de MongoDB Atlas sea la correcta para tu base de datos
mongoose.connect(URI)
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.error(err));
module.exports = mongoose;
