import app from "./app";




///definir puerto y arrancar el proyecto
const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})
