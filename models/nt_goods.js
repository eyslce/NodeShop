/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nt_goods', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    source: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    p_goods_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    goods_id: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    d_title: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    pic: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    cid: {
      type: DataTypes.INTEGER(10),
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
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    sales_num: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    dsr: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    seller_id: {
      type: DataTypes.INTEGER(11),
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
      type: DataTypes.STRING(100),
      allowNull: false
    },
    plan_approval: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    introduce: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ticket_id: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    ticket_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ticket_time: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    ticket_surplus: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    ticket_receive: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    ticket_condition: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    ticket_m_link: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ticket_link: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'nt_goods'
  });
};
