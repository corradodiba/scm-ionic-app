import User from './User.model';
import { Subject } from './Subject.model';

interface Course {
  id?: string;
  name: string;
  status: string;
  year: Date;
  students?: User[];
  teachers?: User[];
  subjects?: Subject[];
}

export default Course;
