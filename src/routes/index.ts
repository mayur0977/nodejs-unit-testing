import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/register', (req: Request, res: Response): void => {
  if (!req.body.firstName) {
    res.status(400).json({ message: 'First name is required' });
  }
  res.status(201).json({ message: 'User created' });
});
router.post('/login', (req: Request, res: Response): void => {
  if (!req.body.firstName) {
    res.status(400).json({ message: 'First name is required' });
  }
  res.status(201).json({ message: 'User created' });
});
router.post('/login', (req: Request, res: Response): void => {
  if (!req.body.firstName) {
    res.status(400).json({ message: 'First name is required' });
  }
  res.status(201).json({ message: 'User created' });
});
export default router;
