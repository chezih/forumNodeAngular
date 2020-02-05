import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';
import { Thread } from '../thread/thread.entity';
import { Comment } from '../comment/comment.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @OneToMany(type => Thread, thread => thread.user)
  threads: Thread[];

  @OneToMany(type => Comment, comment => comment.user)
  comments: Comment[];
}
