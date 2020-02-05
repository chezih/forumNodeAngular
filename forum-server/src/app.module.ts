import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { Thread } from './thread/thread.entity';
import { Comment } from './comment/comment.entity';
import { ThreadModule } from './thread/thread.moudle';
import { CommentModule } from './comment/comment.moudle';
import { WebsocketModule } from './websocket/websocket.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'forum',
      entities: [User, Thread, Comment],
      synchronize: true,
    }),
    UserModule, ThreadModule, CommentModule, WebsocketModule,
  ],
})
export class AppModule {
}
