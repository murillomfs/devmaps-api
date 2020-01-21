const Dev = require('../models/Dev');

module.exports = {
    async index(req, res) {
        // Buscar todos os devs num raio de 10km
        // Filtrar por tecnologias

        const { latitude, longitude, techs } = req.query;

        const techsArray = techs.split(',').map(tech => tech.trim());

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 100000,
                },
            },
        });
        
        return res.json({ devs });
    }
}