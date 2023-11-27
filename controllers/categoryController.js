const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const { validationResult } = require("express-validator")
const customError = require("../utilities/customErrors")

async function store(req, res, next) {

    const validation = validationResult(req)

    if (!validation.isEmpty()) {
        next(new customError("Dati non conformi", 400))
    }
    try {
        const data = await prisma.category.create({
            data: {
                name: req.body.name,
                description: req.body.description
            }

        })

        return res.json(data)
    } catch (error) {
        console.error("Errore durante l'elaborazione della richiesta:", error);
        next(new Error("Errore interno del server"))
    }

}



module.exports = { store }