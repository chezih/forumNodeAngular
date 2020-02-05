import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { ThreadService } from '../thread/thread.service';

@WebSocketGateway()
export class WebsocketService
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  constructor(private readonly threadService: ThreadService) {
  }

  private logger: Logger = new Logger('WebsocketService');

  @SubscribeMessage('message')
  async handleMessage(client: Socket, payload: string) {
    this.server.emit('message', payload);
  }

  pushNotification(data) {
    this.server.emit('threadChanged', data);
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
