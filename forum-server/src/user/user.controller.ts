import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly appService: UserService) {
  }

  @Get()
  getUsers(): Promise<User[]> {
    return this.appService.findAll();
  }
}
