const db = require("../models");
const { update, destroy } = require("./playerController");
const PAGINATION_START = 0;
const PAGINATION_LIMIT = 20;


module.exports = {
    async index (request, response) {
        const start = request.query.start || PAGINATION_START;
        const limit = request.query.limit || PAGINATION_LIMIT;
        try {
            const deck = await db.Futebol.findAll({
                offset: start,
                limit: limit
            });
            response.status(206).json(deck);
        } catch (error) {
            response.json({ Error_name: error.name });
        }
    },
    async store (request, response) {
        try {
            const card = await db.Futebol.create(request.body);
            response.status(201).json(card);
        } catch (error) {
            response.json({ Error_name: error.name });
        }
    },
    async update (request, response) {
        const { id } = request.params;

        try {
            const card = await db.Futebol.findByPk(id);
            if(card){
                const newCard = await card.update(request.body);
                response.json(newCard);
            }
            
            response.status(404).json({ message: "card not found!"});
            
        } catch (error) {
            response.json({ Error_name: error.name });
        }
    },
    async destroy (request, response) {
        const { id } = request.params;
        try {
            const card = await db.Futebol.findByPk(id);

            if(card){
                await card.destroy();
                response.json({ message: "deleted"});
            }

            response.status(404).json({ message: "card not found!"});
        } catch (error) {
            response.json({ Error_name: error.name });
        }
    }
}