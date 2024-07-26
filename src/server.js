const http = require("http");

const app = require("./app");

const { loadPlanetData } = require('./models/planets.model.js');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    await loadPlanetData();
    server.listen(PORT, () => {
        console.log(`server is running on ${PORT} port`)
    });
}

startServer();