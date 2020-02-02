import { AuthorizationType } from './AuthorizationType.models';

export interface FetchedUser {
  token: string;
  expiresIn: number;
  id: string;
  type: AuthorizationType;
}
