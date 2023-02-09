import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers16572428037441657298630687
    implements MigrationInterface
{
    name = "CreateUsers16572428037441657298630687";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isAdmin"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "created_at"`);
        await queryRunner.query(
            `ALTER TABLE "user" ADD "username" character varying NOT NULL`
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "admin" boolean NOT NULL`
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "avatar" character varying NOT NULL`
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "create_at" TIMESTAMP NOT NULL DEFAULT now()`
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "isAdmin" boolean NOT NULL`
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`
        );
        await queryRunner.query(
            `ALTER TABLE "categories" DROP CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b"`
        );
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "id"`);
        await queryRunner.query(
            `ALTER TABLE "categories" ADD "id" character varying NOT NULL`
        );
        await queryRunner.query(
            `ALTER TABLE "categories" ADD CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id")`
        );
        await queryRunner.query(
            `ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`
        );
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
        await queryRunner.query(
            `ALTER TABLE "user" ADD "id" character varying NOT NULL`
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`
        );
        await queryRunner.query(
            `ALTER TABLE "specifications" DROP CONSTRAINT "PK_621aabf71e640ab86f0e8b62a37"`
        );
        await queryRunner.query(
            `ALTER TABLE "specifications" DROP COLUMN "id"`
        );
        await queryRunner.query(
            `ALTER TABLE "specifications" ADD "id" character varying NOT NULL`
        );
        await queryRunner.query(
            `ALTER TABLE "specifications" ADD CONSTRAINT "PK_621aabf71e640ab86f0e8b62a37" PRIMARY KEY ("id")`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "specifications" DROP CONSTRAINT "PK_621aabf71e640ab86f0e8b62a37"`
        );
        await queryRunner.query(
            `ALTER TABLE "specifications" DROP COLUMN "id"`
        );
        await queryRunner.query(
            `ALTER TABLE "specifications" ADD "id" uuid NOT NULL`
        );
        await queryRunner.query(
            `ALTER TABLE "specifications" ADD CONSTRAINT "PK_621aabf71e640ab86f0e8b62a37" PRIMARY KEY ("id")`
        );
        await queryRunner.query(
            `ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`
        );
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" uuid NOT NULL`);
        await queryRunner.query(
            `ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`
        );
        await queryRunner.query(
            `ALTER TABLE "categories" DROP CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b"`
        );
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "id"`);
        await queryRunner.query(
            `ALTER TABLE "categories" ADD "id" uuid NOT NULL`
        );
        await queryRunner.query(
            `ALTER TABLE "categories" ADD CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id")`
        );
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isAdmin"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "create_at"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "avatar"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "admin"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
        await queryRunner.query(
            `ALTER TABLE "user" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "isAdmin" boolean NOT NULL DEFAULT false`
        );
    }
}
