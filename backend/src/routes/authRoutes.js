import express from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.therapist.findUnique({ where: { email } });

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });

  res.json({ token });
});

export default router;

