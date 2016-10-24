module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ns_login', {
        id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        ip: {
            type: DataTypes.STRING,
            allowNull: false
        },
        host_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_agent: {
            type: DataTypes.STRING,
            allowNull: false
        },
        login_time: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: ''
        },
        last_login_time: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: '0'
        }
    }, {
        tableName: 'ns_login',
        timestamps: false,
        freezeTableName: true
    });
};