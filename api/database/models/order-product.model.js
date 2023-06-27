const { Model, DataTypes, Sequelize } = require('sequelize');
const { ORDER_TABLE } = require('./order.model')
const { PRODUCT_TABLE } = require('./product.model')

const ORDER_PRODUCT_TABLE = 'orders_products';

const OrderProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  orderId: {
    field: 'order_id',
    allowNull: false,
    type: DataTypes.BIGINT,
    references: {
      model: ORDER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  productId: {
    field: 'product_id',
    allowNull: false,
    type: DataTypes.BIGINT,
    references: {
      model: PRODUCT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
}

class OrderProduct extends Model {

  static associate(models) {
    // this.belongsTo(models.Order, { as: 'order' });
    // this.belongsTo(models.Product, { as: 'product' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_PRODUCT_TABLE,
      modelName: 'OrderProduct',
      timestamps: false
    }
  }
}

module.exports = { OrderProduct, OrderProductSchema, ORDER_PRODUCT_TABLE };
