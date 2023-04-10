import { Migration } from '@mikro-orm/migrations';

export class Migration20230403184040 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" varchar(255) not null, "phone_number" varchar(255) not null, "password" varchar(255) not null, "name" varchar(255) not null, "email" varchar(255) not null, "api_key" varchar(255) not null, "role" text[] not null default \'{User}\');');
    this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
    this.addSql('alter table "user" add constraint "user_api_key_unique" unique ("api_key");');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user" cascade;');
  }

}
