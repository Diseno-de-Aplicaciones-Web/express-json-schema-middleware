import Ajv from "ajv"
const ajv = new Ajv()

import express from "express"
import cors from "cors"
import tareaJSONSchema from "./lib/JSONSchemas/tarea.mjs"

const validaComoTarea = ajv.compile(tareaJSONSchema)

function middlewareValidacionTarea (request, response, next) {
    console.log(request.body);
    if ( validaComoTarea(request.body) ) {
        next()
    } else {
        console.log(validaComoTarea.errors);
        response.status(400)
        response.send("Formato inválido")
    }
}


const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(_, response)=>{
    response.status(200)
    response.send("Ok!")
})

app.post("/mensaxe/", middlewareValidacionTarea, (request, response)=>{
    const tarea = request.body
    response.status(200)
    response.send(`Tarea con descripcion: ${tarea.descripcion}, id: ${tarea.id}, rematada: ${tarea.rematada}`)
})

app.listen( 8000,()=>{
    console.log("Express running...");
});
