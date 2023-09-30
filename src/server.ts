import express from "express"
import { sequelize } from "./database"

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log('Conexão com o Banco de dados iniciado com Sucesso!')
    })
    console.log(`Servidor iniciado com sucesso na porta ${PORT}!`)
})