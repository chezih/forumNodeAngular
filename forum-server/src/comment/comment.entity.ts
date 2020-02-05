import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne, BaseEntity } from 'typeorm';
import { User } from '../user/user.entity';
import { Thread } from '../thread/thread.entity';

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  content: string;

  @Column('datetime')
  created: Date;

  @ManyToOne(type => User, user => user.comments)
  user: User;

  @ManyToOne(type => Thread, thread => thread.comments)
  thread: Thread;
}
