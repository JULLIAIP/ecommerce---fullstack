//Back-end API RESTfull
import Fastify from "fastify";
import { Routes } from "./lib/routes";
const app = Fastify()

//Setting cors
import cors from '@fastify/cors'
app.register(cors)

app.register(Routes)

app.listen({ port: 3333 }).then(() => { console.log("HTTP Server Running!") })