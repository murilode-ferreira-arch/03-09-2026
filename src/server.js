import express from 'express'

const app = express()
const port = 3000

//ler o json trafegado na aplicação
app.use(express.json())

app.get("/", (_req, res) => {
    resizeBy.json ("Hello world")
})

app.listen(port, () => {
    console.log (`API rodando em : http://localhost:${port}`);
})

