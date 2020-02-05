import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Thread } from './thread.entity';
import { CreateThreadDto } from './dto/createThreadDto';
import { User } from '../user/user.entity';

@Injectable()
export class ThreadService {
  constructor(
    @InjectRepository(Thread)
    private readonly threadRepository: Repository<Thread>,
  ) {
  }

  async findAll(): Promise<Thread[]> {
    return await this.threadRepository.createQueryBuilder('thread').leftJoinAndSelect('thread.user', 'u').leftJoinAndSelect('thread.comments', 'comment').leftJoinAndSelect('comment.user', 'user').orderBy('thread.created').getMany();
  }

  async insert(threadDto: CreateThreadDto): Promise<Thread> {
    const { content, userId } = threadDto;
    const thread = new Thread();
    thread.content = content;
    thread.user = await User.findOne(userId);
    thread.created = new Date();
    thread.comments = [];
    return await thread.save();
  }

  async findThread(id: number): Promise<any> {
    const loadedThread = await this.threadRepository
      .findOne(id, { relations: ['comments'] });
    return loadedThread;
  }

}
