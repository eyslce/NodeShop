/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nt_category', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cname: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    tid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    source: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    is_use: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    }
  }, {
    tableName: 'nt_category'
  });
};
