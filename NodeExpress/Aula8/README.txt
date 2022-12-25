-- MIDDLEWARE --

Midlleware nada mais é do que a função com o req e o res.
app.post("/", (req, res) =>{
    res.send("hello world");
})