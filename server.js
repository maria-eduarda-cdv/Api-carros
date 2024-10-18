
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/carros', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createCarro(body);
    return reply.status(201).send();
})

// READE
server.get('/carros', async () => {
    const carros = await databasePostgres.listCarros();
    return carros;
});

// UPDATE
server.put('/carros/:id', async (request, reply) => {
    const carroID = request.params.id;
    const body = request.body;
    await databasePostgres.updateCarro(carroID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/carros/:id', async (request, reply) => {
    const carroID = request.params.id;
    await databasePostgres.deleteCarro(userID);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
