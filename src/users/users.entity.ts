import { Entity, Enum, Property } from '@mikro-orm/core';
import { BaseEntity } from '../entities/BaseEntity.entity';
import Role from './role.enum';

@Entity()
export class User extends BaseEntity {
  @Property()
  phoneNumber: string;

  @Property({ hidden: true })
  password: string;

  @Property()
  name: string;

  @Property({ unique: true })
  email: string;

  @Property({ unique: true })
  apiKey: string;

  @Enum()
  role!: Role;
}
