import {User} from './user.model';
import {Comment} from './comment.model';

export interface Thread {
  id: number;
  user: User;
  content: string;
  created: Date;
  comments: Comment[];
}
