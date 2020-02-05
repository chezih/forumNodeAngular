import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './dto/createCommentDto';
import { CreateThreadDto } from '../thread/dto/createThreadDto';
import { Thread } from '../thread/thread.entity';
import { User } from '../user/user.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {
  }

  findAll(): Promise<Comment[]> {
    return this.commentRepository.find({ relations: ['user'] });
  }

  async insert(commentDto: CreateCommentDto): Promise<Comment> {
    const { content, userId, threadId } = commentDto;
    const comment = new Comment();
    comment.user = await User.findOne(userId);
    comment.thread = await Thread.findOne(threadId);
    comment.content = content;
    comment.created = new Date();
    return await comment.save();
  }

}
