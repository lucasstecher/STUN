module.exports = (sequelize, Datatypes) => {
    const Naruto = sequelize.define("Naruto", {
        name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        image: {
            type: Datatypes.STRING,
            allowNull: false
        },
        intelligence: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        ninjutsu: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        taijutsu: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        genjutsu: {
            type: Datatypes.INTEGER,
            allowNull: false
        }
    });

    return Naruto;
}