import express from 'express';

// utils
import { authorization } from '../../../utils'

export const router = express.Router();

const post = (req, res) => {
  try {
      res.status(204).end();
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
};

router.post('/', [authorization], post);

export { router as logout };