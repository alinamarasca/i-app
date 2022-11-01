import { User } from './user.interface';

export interface Post {
  user: User;
  imageUrl: string;
  views: number;
  likes: number;
  comments: number;
}
