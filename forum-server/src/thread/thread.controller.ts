import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ThreadService } from './thread.service';
import { Thread } from './thread.entity';
import { CreateThreadDto } from './dto/createThreadDto';

@Controller('thread')
export class ThreadController {
  constructor(private readonly threadService: ThreadService) {
  }

  @Get()
  getThreads(): Promise<Thread[]> {
    return this.threadService.findAll();
  }

  @Get(':ThreadId')
  getCommentsOfThread(@Param('hmdCode') ThreadId: number): Promise<Thread[]> {
    return this.threadService.findThread(ThreadId);
  }

  @Post()
  async addThread(@Body() thread: CreateThreadDto): Promise<Thread> {
    return await this.threadService.insert(thread);
  }
}
