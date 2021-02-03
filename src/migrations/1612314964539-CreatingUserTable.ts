import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatingUserTable1612314964539 implements MigrationInterface {
    name = 'CreatingUserTable1612314964539'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(250) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "dateBirth" character varying NOT NULL, "description" text, "sex" character varying NOT NULL, "country" character varying NOT NULL, "city" character varying NOT NULL, "followersAmount" integer, "avatar" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
