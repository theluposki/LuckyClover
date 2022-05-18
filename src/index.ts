import { app } from "./app";

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log(`[ APP ] Running in http://localhost:${PORT} pid: ${process.pid}`));

process.on("SIGTERM", () => {
    console.log("\n\n[ APP ][ Stoped ] \n\n", new Intl.DateTimeFormat('pt-br', { dateStyle: 'full', timeStyle: 'long' }).format(Date.now()))
    server.close((error) => {
        console.log("\n\n exit")
        process.exit()
    })
})
