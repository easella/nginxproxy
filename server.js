

// Comes with Node
const express=require("express")
var proxy=require("express-http-proxy")
app=express()
app.use(proxy("https://games.awdrgyjil1234.repl.co"))
app.listen(8080)
