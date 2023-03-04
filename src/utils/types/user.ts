import {USER_ACTION, USER_STATUS} from 'utils/constants';

export interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserCreationDto {
  firstName: string;
  lastName: string;
  email: string;
}

export type UserStatusType = (typeof USER_STATUS)[keyof typeof USER_STATUS];

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  status: UserStatusType;
}

export type UserActionType = (typeof USER_ACTION)[keyof typeof USER_ACTION];
