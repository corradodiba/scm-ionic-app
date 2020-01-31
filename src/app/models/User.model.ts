import { Subject } from './Subject.model';

export interface User {
  email: string;
  password: string;
  fiscalCode: string;
  name: string;
  surname: string;
  dateOfBirth: Date;
  subjects?: Subject['_id'][];
  imagePath: String;
  type: 'Admin' | 'Student' | 'Teacher';
}
