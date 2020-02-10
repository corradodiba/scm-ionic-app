import { AuthorizationType } from './AuthorizationType.models';
export interface Token {
  token: string;
  expiresIn: number;
  id: string;
  type: AuthorizationType;
}
