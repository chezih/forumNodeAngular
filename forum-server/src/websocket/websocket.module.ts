import { Module } from '@nestjs/common';
import { WebsocketService } from './websocket.service';
import { ThreadModule } from '../thread/thread.moudle';

@Module({
  imports: [ThreadModule],
  providers: [WebsocketService],
})
export class WebsocketModule {
}
