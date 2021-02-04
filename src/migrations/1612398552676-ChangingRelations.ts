import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangingRelations1612398552676 implements MigrationInterface {
    name = 'ChangingRelations1612398552676'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tutor_type" ("id" SERIAL NOT NULL, "name" character varying(250) NOT NULL, "needsApproval" boolean NOT NULL, "rules" text NOT NULL, CONSTRAINT "PK_2d3a51023236946434bc9f7eaac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tutor" ADD "tutorTypeIdId" integer`);
        await queryRunner.query(`ALTER TABLE "tutor" ADD CONSTRAINT "FK_ee2cc09b871a0ed779864ac6278" FOREIGN KEY ("tutorTypeIdId") REFERENCES "tutor_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tutor" DROP CONSTRAINT "FK_ee2cc09b871a0ed779864ac6278"`);
        await queryRunner.query(`ALTER TABLE "tutor" DROP COLUMN "tutorTypeIdId"`);
        await queryRunner.query(`DROP TABLE "tutor_type"`);
    }

}
