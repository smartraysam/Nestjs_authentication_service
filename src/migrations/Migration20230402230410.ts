import { Migration } from '@mikro-orm/migrations';

export class Migration20230402230410 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" add column "api_key" varchar(255) not null, add column "role" smallint not null;');
    this.addSql('alter table "user" add constraint "user_api_key_unique" unique ("api_key");');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" drop constraint "user_api_key_unique";');
    this.addSql('alter table "user" drop column "api_key";');
    this.addSql('alter table "user" drop column "role";');
  }

}
