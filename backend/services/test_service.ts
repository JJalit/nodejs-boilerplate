import { Test } from '../models';

export const getUser = async (name: string) => {
  const user = await Test.find({ name: name }).lean();
  return user;
};
