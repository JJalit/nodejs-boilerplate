import express from 'express';

const router = express.Router();

router.get('/', async (req, res, next) => {
  console.log('> request [GET] /api/test');

  try {
    return res.status(200).send('TEST');
  } catch (err) {
    return next(err);
  }
});

export default router;
