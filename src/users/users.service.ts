import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { User } from './users.entity';
import { EntityRepository } from '@mikro-orm/core';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {}

  async getByEmail(email: string) {
    const user = await this.userRepository.findOne({
      email,
    });
    if (!user) {
      throw new NotFoundException('User not found', {
        cause: new Error(),
        description: 'User not found',
      });
    }
    return user;
  }

  async getById(id: number) {
    const user = await this.userRepository.findOne({ id });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }
  async create(user: CreateUserDto) {
    const newUser = await this.userRepository.create(user);
    await this.userRepository.persistAndFlush(newUser);
    return newUser;
  }

  async checkApiKey(apiKey: string) {
    const user = await this.userRepository.findOne({ apiKey });
    if (user) {
      return true;
    }
    return false;
  }
}

export default UsersService;
