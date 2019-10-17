import express from 'express';

export const router = express.Router();

const post = (req, res) => {
  try {
      res.status(204).end();
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
};

router.post('/', post);

export { router as logout };