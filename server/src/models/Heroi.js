module.exports = (sequelize, Datatypes) => {
    const Heroi = sequelize.define("Heroi", {
        name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        image: {
            type: Datatypes.STRING,
            allowNull: false
        },
        velocity: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        special: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        strength: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        intelligence: {
            type: Datatypes.INTEGER,
            allowNull: false
        }
    });

    return Heroi;
}