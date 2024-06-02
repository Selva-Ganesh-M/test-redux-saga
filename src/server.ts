import express from "express"
import cors from "cors"
import path from "path"
import { reqLogger } from "./middleware/logger.mw"
import { dbCheck } from "./config/db.config"
import envs from "./config/env.config"
import { customErrorHandler } from "./middleware/customErrorHandler"
import homeCtrl from "./controllers/home.ctrl"
import _404_ctrl from "./controllers/_404.ctrl"

const server = express()

// resources
server.use(express.static(path.join(__dirname, "..", "public")))

// middlewares
server.use(cors())
server.use(express.json())
server.use(reqLogger)

// homeRouter
server.get("/", homeCtrl)

// mainRouter

// unknownRouter
server.get("*", _404_ctrl)



// custom error handler
server.use(customErrorHandler)

// start server
const startServer = async () => {
    try {
        await dbCheck()
        server.listen(envs.PORT, envs.URL, ()=>{
            console.log(`server started listening on port ${envs.PORT}`)
        })
    } catch (error) {
        console.error(`server failed to start.`)
    }
}

startServer()