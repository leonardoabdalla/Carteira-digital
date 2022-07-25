const Joi = require('joi');
const modelCustomer = require('../models/customerModel');
const jwtService = require('./jwtService');

const authService = {
  validateBody: (data) => {
    const schema = Joi.object({
      codCliente: Joi.number().required(),
      password: Joi.number().required(),
    });

    const { error, value } = schema.validate(data);

    if (error) {
      const e = new Error('Some required fields are missing');
      e.name = 'ValidationError';
      throw e;
    }
    return value;
  },

  login: async (codCliente, password) => {
    const user = await modelCustomer.get(codCliente);
    if (!user || user.password !== password) {
      const e = new Error('Invalid fields');
      e.name = 'ValidationError';
      throw e;
    }

    const token = jwtService.createToken(user);

    return token;
  },

  validateToken: (token) => {
    const data = jwtService.validateToken(token);
    return data;
  },
};

module.exports = authService;