const db = require("../models");
const PAGINATION_START = 0;
const PAGINATION_LIMIT = 3;

module.exports = {
    async index (request, response) {
        const start = request.query.start || PAGINATION_START;
        const limit = request.query.limit || PAGINATION_LIMIT;

        try {
            const heroes = await db.Hero.findAll({
                offset: start,
                limit: limit
            });
            response.status(206).json(heroes);
        } catch (error) {
            response.json({ Error_name: error.name});
        }
    },
    async store (request, response) {
        try {
            const hero = await db.Hero.create(request.body);   
            response.status(201).json(hero);        
        } catch (error) {
            response.json({ Error_name: error.name});
        }
    },
    async update (request , response) {
        const { id } = request.params;

        try {
            const newHero = await db.Hero.findByPk(id);
            if(newHero){
                const hero = await newHero.update(request.body);
                response.json(hero);
            }

            response.status(204).json({ message: "player not found"});

        } catch (error) {
            response.json({ error_name: error.name});
        }
    }

}