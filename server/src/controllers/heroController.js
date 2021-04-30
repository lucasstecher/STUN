const db = require("../models");
const PAGINATION_START = 0;
const PAGINATION_LIMIT = 20;

module.exports = {
    async index (request, response) {
        const start = request.query.start || PAGINATION_START;
        const limit = request.query.limit || PAGINATION_LIMIT;

        try {
            const deck = await db.Hero.findAll({
                offset: start,
                limit: limit
            });
            response.status(206).json(deck);
        } catch (error) {
            response.json({ Error_name: error.name});
        }
    },
    async store (request, response) {
        try {
            const card = await db.Hero.create(request.body);   
            response.status(201).json(card);        
        } catch (error) {
            response.json({ Error_name: error.name});
        }
    },
    async update (request , response) {
        const { id } = request.params;

        try {
            const newCard = await db.Hero.findByPk(id);
            if(newCard){
                const card = await newCard.update(request.body);
                response.json(card);
            }

            response.status(204).json({ message: "player not found"});

        } catch (error) {
            response.json({ error_name: error.name});
        }
    },
    async destroy (request, response) {
        const { id } = request.params;

        try {
            const card = await db.Hero.findByPk(id);

            if(card) {   
                await card.destroy();
                response.json({ message: "deleted"});
            }

            response.status(204).json({ message: "player not found"});
        } catch (error) {
            response.json({ error_name: error.name});
        }
    }
}