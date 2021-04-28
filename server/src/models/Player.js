module.exports = (sequelize, Dataypes) => {
    const Player = sequelize.define("Player", {
        nickname: {
            type: Dataypes.STRING,
            allowNull: false
        },
        score: {
            type: Dataypes.INTEGER,
            allowNull: false
        }
    });

    return Player;
}