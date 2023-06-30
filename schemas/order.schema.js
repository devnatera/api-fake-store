const Joi = require('joi');

const id = Joi.number().positive();
const customerId = Joi.number().positive();
const orderId = Joi.number().positive();
const productId = Joi.number().positive();
const amount = Joi.number().integer().positive();

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
});

const getOrderSchema = Joi.object({
  id: id.required(),
});

const addItemSchema = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required(),
})

module.exports = {
  createOrderSchema,
  getOrderSchema,
  addItemSchema,
}
