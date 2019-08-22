module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        nickname: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        email: {
          type:DataTypes.STRING(50),
          allowNull: false
        },
        userId: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
        {
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });

    return User;
};