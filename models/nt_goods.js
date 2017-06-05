module.exports = function(sequelize, DataTypes) {
    return sequelize.define('nt_goods', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        source: {
            type: DataTypes.STRING,
            allowNull: false
        },
        p_goods_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        goods_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        d_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pic: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        org_price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        is_tmall: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sales_num: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dsr: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        seller_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        commission_plan: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        commission_queqiao: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        plan_link: {
            type: DataTypes.STRING,
            allowNull: false
        },
        plan_approval:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        introduce: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ticket_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ticket_price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        ticket_time: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ticket_surplus:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ticket_receive:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ticket_condition: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ticket_m_link: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ticket_link: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'nt_goods',
        timestamps: false,
        freezeTableName: true
    });
};