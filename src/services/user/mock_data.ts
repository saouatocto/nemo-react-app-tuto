import { User } from 'utils/types';
import { USER_STATUS } from 'utils/constants';

export const USERS: User[] = [
  {
    id: '60a9e1z53e',
    firstName: 'saber',
    lastName: 'ouarezzamen',
    createdAt: '02/02/2022 13:14',
    status: USER_STATUS.ACTIVE,
    email: 'saou@octo.ma',
  },
  {
    id: '00a9e1z53s',
    firstName: 'Moise',
    lastName: 'GUINHOUYA',
    createdAt: '02/02/2022 13:14',
    status: USER_STATUS.ACTIVE,
    email: 'saou@octo.ma',
  },
  {
    id: '40a9e1z53k',
    firstName: 'Anass',
    lastName: 'AZIZI',
    createdAt: '02/02/2022 13:14',
    status: USER_STATUS.SUSPENDED,
    email: 'saou@octo.ma',
  },

  {
    id: '10a9e1z53k',
    firstName: 'Wafiya',
    lastName: 'RAISSOUNI',
    createdAt: '02/02/2022 13:14',
    status: USER_STATUS.ACTIVE,
    email: 'saou@octo.ma',
  },
];
