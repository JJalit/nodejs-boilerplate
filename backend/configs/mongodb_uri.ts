import dotenv from 'dotenv';
dotenv.config();

const mongodbUri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_NAME}.rw3qb.mongodb.net/${process.env.MONGODB_DATABASE_NAME}?retryWrites=true&w=majority`;

export default mongodbUri;
