module.exports = (sequelize, Datatypes) => {
    const Futebol = sequelize.define("Futebol", {
        name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        image: {
            type: Datatypes.STRING,
            allowNull: false
        },
        pace: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        shooting: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        dribbling: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        physical: {
            type: Datatypes.INTEGER,
            allowNull: false
        }
    });

    return Futebol;
}