import { z } from "zod"
import { prisma } from "./prisma"
import { FastifyInstance } from "fastify"

// HTTP metod : Get, Post, Put, Patch, Delete


//this function is required async
export async function Routes(app: FastifyInstance) {

    //auth
    app.post('/authenticate', () => { })
    app.post("/authenticate/sso", () => { })

    //user
    app.get("/user/:id", async (request) => {

        //check information with Z lib
        const getUserRequest = z.object({
            id: z.string()
        })

        const { id } = getUserRequest.parse(request.params)

        const user = await prisma.user.findMany({
            where: {
                id: id
            }
        })
        return user
    })
    app.post("/user", async (request) => {

        const bodyRequestCreateUser = z.object({
            name: z.string(),
            email: z.string(),
            login: z.string(),
            password: z.string(),

        })

        const { name, email, login, password } = bodyRequestCreateUser.parse(request.body)

        await prisma.user.create({
            data: {
                name, email, password, login
            }
        })

        return "Usuário criado com sucesso!"
    })
    app.put("/user/:id", () => { })

    //deals
    app.get("/deal/:id", () => { })
    app.get("/deal/search", () => { })
    app.post("/deal", () => { })
    app.put("/deal/:id", () => { })

    //proposals
    app.get("/deal/:id/proposals/:id_bid", () => { })
    app.get("/deal/:id/proposals", () => { })
    app.post("/deal/:id/proposals", () => { })
    app.put("/deal/:id/proposals/:id_bid", () => { })

    //messages
    app.get("/deal/:id/message/:id_message", () => { })
    app.get("/deal/:id/message", () => { })
    app.post("/deal/:id/message", () => { })
    app.put("/deal/:id/message/:id_message", () => { })

    //invites
    app.get("/deal/:id/invite/:id_invite", () => { })
    app.get("/deal/:id/invite", () => { })
    app.post("/deal/:id/invite", () => { })
    app.put("/deal/:id/invite/:id_invite", () => { })




}
