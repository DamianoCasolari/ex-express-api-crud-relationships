const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function store(req, res, next) {

    try {
    const data = await prisma.category.create({
            data: {
                name: req.body.name,
                description: req.body.description
            }

        })

        return res.json(data)
    }catch(error){
        console.error("Errore durante l'elaborazione della richiesta:", error);
        next(new Error("Errore interno del server"))
    }

}



module.exports = { store }