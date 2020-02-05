import {User} from './user.model';
import {Thread} from './thread.model';

export interface Comment {
  id: number;
  user: User;
  thread: Thread;
  created: Date;
  content: string;
}
