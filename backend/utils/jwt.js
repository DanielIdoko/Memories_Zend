import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env.config';

function generateToken(user) {
  return jwt.sign(
    { id: user._id, email: user.email },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

export { generateToken, verifyToken };
