import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterAvatarNullable1657905446950 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "user" ALTER COLUMN "avatar" DROP NOT NULL`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "user" ADD "avatar" character varying NOT NULL`
        );
    }
}
