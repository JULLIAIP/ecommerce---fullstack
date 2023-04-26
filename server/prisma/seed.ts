//Use this file to create initial data in the bulk database.

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    //CRIAR DEAL TYPE ID

    await prisma.urgency.create({
        data: {
            type: {
                create: {
                    name: "alta",

                }
            },
            deal: {
                create: {
                    name: 'Head Sea JBL',
                    creatorId: "65d849a5-19a7-46c0-825c-529aaf83d5eb",
                    creator: {
                        connect: { id: "65d849a5-19a7-46c0-825c-529aaf83d5eb" },
                    },
                    description: "Fone de Ouvido Bluetooth 5.0 JBL Tune Bt 510 Com Microfone até 40 horas de bateria Entrada Tipo C - Azul",
                    tradeFor: "VENDA",
                    value: 500,
                    type: {
                        create: {
                            name: 'venda'
                        }
                    }

                }
            }, 
        }
    })

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
