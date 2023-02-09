import { MigrationInterface, QueryRunner } from "typeorm";

export class DropColumnUsernameAdminCreateAt1657460464675
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "admin"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "create_at"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "user" ADD "username" character varying NOT NULL`
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "admin" boolean NOT NULL`
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "create_at" TIMESTAMP NOT NULL DEFAULT now()`
        );
    }
}
