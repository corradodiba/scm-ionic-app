import { Subject } from './Subject.model';

interface User {
  id: string;
  email: string;
  password: string;
  fiscalCode: string;
  name: string;
  surname: string;
  dateOfBirth: Date;
  subjects?: Subject['id'][];
  imagePath: string;
  type: 'Admin' | 'Student' | 'Teacher';
  status?: boolean;
}

export default User;
