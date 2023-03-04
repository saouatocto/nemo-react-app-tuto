import { User } from 'utils/types';
import { capitalize } from './string';

export const getUserFullName = (user: User) => {
  const { lastName, firstName } = user;

  return [capitalize(firstName), capitalize(lastName)].join(' ');
};
