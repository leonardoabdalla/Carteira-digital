const authService = require('../services/authService');
const jwtService = require('../services/jwtService');

const authController = {
  login: async (req, res) => {
    const { codCliente, password } = authService.validateBody(req.body);

    const token = await authService.login(codCliente, password);

    res.status(200).json({ token });
  },

  validateToken: (req, _res, next) => {
    const { authorization } = req.headers;

    jwtService.validateToken(authorization);

    next();
  },
};

module.exports = authController;