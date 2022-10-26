import express from 'express';

import { testRoutes } from './controllers';

const router = express.Router();

router.use('/test', testRoutes);

export default router;
