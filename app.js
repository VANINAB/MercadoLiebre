const express = require ("express")
const app = express()
const path = require ("path")

app.get ("/,", (req,res) => {
    res.send ("hola Mundo")
})

app.listen(process.env.PORT || 80, () => {
    console.log ("se prendio")
})

app.use (express.static(path.join(__dirname, "public")))

app.get ("/", (req,res) => {
    res.sendFile (path.join(__dirname, "./views/index.html"))
})
app.get ("/register", (req,res) => {
    res.sendFile (path.join(__dirname, "./views/register.html"))
})
app.get ("/login", (req,res) => {
    res.sendFile (path.join(__dirname, "./views/login.html"))
})