const express = require ("express");
const path = require ("path");
const app = express();
const PORT =3030;

/*configuraciones */
app.use(express.static(path.join(__dirname,"public")));

/*rutas */
app.get("/",(req,res)=> res.sendFile(path.join(__dirname,"views","home.html")));
app.get("/*",(req,res)=> res.sendFile(path.join(__dirname,"views","404.html")));

app.listen(PORT,()=>console.log("servidor corriendo en http://localhost:" +  PORT));