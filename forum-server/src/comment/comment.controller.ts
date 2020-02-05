import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './Comment.entity';
import { CreateThreadDto } from '../thread/dto/createThreadDto';
import { Thread } from '../thread/thread.entity';
import { CreateCommentDto } from './dto/createCommentDto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {
  }

  @Get()
  getComments(): Promise<Comment[]> {
    return this.commentService.findAll();
  }

  @Post()
  async addComment(@Body() comment: CreateCommentDto): Promise<Comment> {
    return await this.commentService.insert(comment);
  }
}
