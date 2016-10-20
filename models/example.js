module.exports = function(sequelize, DataTypes) {
    return sequelize.define('im_setting', {
        se_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        se_type: {
            type: DataTypes.INTEGER(8),
            allowNull: false,
            defaultValue: '0'
        },
        se_typename: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        se_typename_crc32: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: '0'
        },
        se_val: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        se_valchange: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        se_fieldtype: {
            type: DataTypes.INTEGER(2),
            allowNull: false,
            defaultValue: '1'
        },
        se_adminid: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        se_ip: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        se_status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: '1'
        },
        se_add_time: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: '0'
        },
        last_modified: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: 'CURRENT_TIMESTAMP'
        }
    }, {
        tableName: 'im_setting',
        timestamps: false,
        freezeTableName: true
    });
};