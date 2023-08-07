import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  private usersService: UsersService;
  constructor() {
    this.usersService = new UsersService();
  }
  @Get('/all')
  getAll() {
    return this.usersService.getAllUsers();
  }
}
