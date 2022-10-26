import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';

import backendRoutes from './backend/routes';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ limit: '100mb', extended: false }));
app.use(express.json({ limit: '100mb' }));
app.use(cors());

app.use('/api', backendRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at ${port}`);
});
