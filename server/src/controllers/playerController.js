const db = require("../models");
const PAGINATION_START = 0;
const PAGINATION_LIMIT = 3;

module.exports = {
    async index (request, response) {
        const start = request.query.start || PAGINATION_START;
        const limit = request.query.limit || PAGINATION_LIMIT;

        try {
            const players = await db.Player.findAll({
                offset: start,
                limit: limit,
                order: [['score', 'DESC']]
            });
            response.status(206).json(players);
        } catch (error) {
            response.json({ Error_name: error.name});
        }
    },
    async store (request, response) {
        try {
            const player = await db.Player.create(request.body);   
            response.status(201).json(player);        
        } catch (error) {
            response.json({ Error_name: error.name});
        }
    },
    async update (request , response) {
        const { id } = request.params;

        try {
            const newPlayer = await db.Player.findByPk(id);
            if(newPlayer){
                const player = await newPlayer.update(request.body);
                response.json(player);
            }

            response.status(204).json({ message: "player not found"});

        } catch (error) {
            response.json({ error_name: error.name});
        }
    },
    async destroy (request, response) {
        const { id } = request.params;

        try {
            const player = await db.Player.findByPk(id);

            if(player) {   
                await player.destroy();
                response.json({ message: "deleted"});
            }

            response.status(204).json({ message: "player not found"});
        } catch (error) {
            response.json({ error_name: error.name});
        }
    }

}