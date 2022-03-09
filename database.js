const mongoose = require("mongoose");

//conectando a la base de datos
const db = mongoose.connect(process.env.DB_URI, {useNewUrlParser: true})
.then( () => {
    console.log('Connected to databese MongoDB Atlas!');
}).catch( e => {
    console.log("Connection failed!");
    console.error(e);
});

//para que se pueda importar la bd
module.exports = db;