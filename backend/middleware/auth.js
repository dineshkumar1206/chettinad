const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(403).json({ success: false, message: 'A token is required for authentication' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(403).json({ success: false, message: 'Invalid token format' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'super_secret_jwt_key_chettinad');
    req.admin = decoded;
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Invalid Token' });
  }
  return next();
};

module.exports = verifyToken;
