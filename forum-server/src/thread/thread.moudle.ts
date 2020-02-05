import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThreadService } from './thread.service';
import { ThreadController } from './thread.controller';
import { Thread } from './thread.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Thread])],
  providers: [ThreadService],
  controllers: [ThreadController],
  exports: [ThreadService],
})
export class ThreadModule {
}
