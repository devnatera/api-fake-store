const { faker } = require('@faker-js/faker');
const { Op } = require('sequelize');
const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class ProductService {

  constructor() { }

  async find({ limit, offset, price, price_min, price_max }) {
    const options = {
      include: ['category'],
      where: {}
    };
    if (limit && offset) {
      options.offset = offset;
      options.limit = limit;
    }
    if (price) {
      options.where.price = price;
    }
    if (price_min && price_max) {
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max,
      };
    }
    const products = await models.Product.findAll(options);
    return products;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    return product;
  }

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const data = await product.update(changes);
    return data;
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return { id };
  }
}

module.exports = ProductService
