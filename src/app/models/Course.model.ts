import User from './User.model';

interface Course {
  id?: string;
  name: string;
  status: string;
  year: Date;
  students?: User['id'];
  teachers?: User['id'];
  subjects?: User['id'];
}

export default Course;
