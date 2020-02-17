import { Subject } from './Subject.model';
import User from './User.model';

export interface Grade {
  id: string;
  grade: Number;
  subject: Subject;
  user: User;
}
