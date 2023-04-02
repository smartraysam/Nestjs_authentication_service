import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from '../entities/BaseEntity.entity';

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

  @Property()
  role: string;

  @Property({ unique: true })
  apiKey: string;
}
