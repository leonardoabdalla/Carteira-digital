const jwt = require('jsonwebtoken');
require('dotenv');

const jwtService = {
  createToken: (data) => {
    console.log('data dsconstruido ==> ', { codCliente: data.codCliente });
    const token = jwt.sign({ data: { exclude: ['password', 'saldo'] } },
      process.env.JWT_SECRET_KEY);
    console.log('token aqui ====> ', token);
    return token;
  },

  validateToken: (token) => {
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
      return data;
    } catch (err) {
      console.log(' erro =========>    ', err);
      if (err.message === 'jwt must be provided') {
        const error = new Error('Token not found');
        error.name = 'UnauthorizedError';
        throw error;
      }
      const error = new Error('Expired or invalid token');
      error.name = 'UnauthorizedError';
      throw error;
    }
  },
};

module.exports = jwtService;