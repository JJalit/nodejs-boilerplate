import mongoose from 'mongoose';

interface ITest {
  name: string;
  nickname: string;
}

const testSchema = new mongoose.Schema<ITest>(
  {
    name: { type: String, required: true },
    nickname: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const Test = mongoose.model('Test', testSchema);

export default Test;
