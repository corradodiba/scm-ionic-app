import { AuthorizationType } from './AuthorizationType.models';

interface Token {
  token: string;
  expiresIn: number;
  id: string;
  type: AuthorizationType;
}

export default Token;
