import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async getAllUsers() {
    return this.prisma.user.findMany();
  }
}
