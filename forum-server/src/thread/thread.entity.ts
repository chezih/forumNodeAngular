import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne, BaseEntity } from 'typeorm';
import { User } from '../user/user.entity';
import { Comment } from '../comment/comment.entity';

@Entity()
export class Thread extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  content: string;

  @Column('datetime')
  created: Date;

  @OneToMany(type => Comment, comment => comment.thread)
  comments: Comment[];

  @ManyToOne(type => User, user => user.threads)
  user: User;
}
