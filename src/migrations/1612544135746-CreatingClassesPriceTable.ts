import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatingClassesPriceTable1612544135746 implements MigrationInterface {
    name = 'CreatingClassesPriceTable1612544135746'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "price" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "time" integer, "price" numeric, "isPromotionalCode" boolean NOT NULL DEFAULT false, "discountAmount" integer, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "classesId" uuid, CONSTRAINT "PK_d163e55e8cce6908b2e0f27cea4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "classes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(500) NOT NULL, "amountTime" integer NOT NULL DEFAULT '0', "level" character varying, "description" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "tutorId" integer, CONSTRAINT "PK_e207aa15404e9b2ce35910f9f7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "price" ADD CONSTRAINT "FK_2c06d4bed39d917ee7c1bb5a56a" FOREIGN KEY ("classesId") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "FK_7b209cea031b91a6ebb2b5c941d" FOREIGN KEY ("tutorId") REFERENCES "tutor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "FK_7b209cea031b91a6ebb2b5c941d"`);
        await queryRunner.query(`ALTER TABLE "price" DROP CONSTRAINT "FK_2c06d4bed39d917ee7c1bb5a56a"`);
        await queryRunner.query(`DROP TABLE "classes"`);
        await queryRunner.query(`DROP TABLE "price"`);
    }

}
