import { Entity, Enum, Property } from '@mikro-orm/core';
import {
  IsEmail,
  IsPhoneNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { BaseEntity } from '../entities/BaseEntity.entity';
import Role from './role.enum';

@Entity()
export class User extends BaseEntity {
  @IsPhoneNumber()
  @Property()
  phoneNumber: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  @Property({ hidden: true })
  password: string;

  @IsString()
  @Property()
  name: string;

  @IsEmail()
  @Property({ unique: true })
  email: string;

  @Property({ unique: true })
  apiKey: string;

  @Enum({ items: () => Role, array: true, default: [Role.User] })
  role: Role[] = [Role.User];
}
