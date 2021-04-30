module.exports = (sequelize, Datatypes) => {
    const Hero = sequelize.define("Hero", {
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

    return Hero;
}