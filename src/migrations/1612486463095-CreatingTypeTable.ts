import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatingTypeTable1612486463095 implements MigrationInterface {
    name = 'CreatingTypeTable1612486463095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tutor_type" ("id" SERIAL NOT NULL, "name" character varying(250) NOT NULL, "needsApproval" boolean NOT NULL, "rules" text NOT NULL, CONSTRAINT "PK_2d3a51023236946434bc9f7eaac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tutor" DROP CONSTRAINT "REL_054b60053f3893bde9a7d6c05a"`);
        await queryRunner.query(`ALTER TABLE "tutor" DROP COLUMN "userIDId"`);
        await queryRunner.query(`ALTER TABLE "tutor" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "tutor" ADD CONSTRAINT "UQ_6a8a2d8e7d39c22e48b1c63de90" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "tutor" ADD "typeId" integer`);
        await queryRunner.query(`ALTER TABLE "tutor" ADD CONSTRAINT "FK_6a8a2d8e7d39c22e48b1c63de90" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tutor" ADD CONSTRAINT "FK_e88305245d4a0d9f822e806e597" FOREIGN KEY ("typeId") REFERENCES "tutor_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tutor" DROP CONSTRAINT "FK_e88305245d4a0d9f822e806e597"`);
        await queryRunner.query(`ALTER TABLE "tutor" DROP CONSTRAINT "FK_6a8a2d8e7d39c22e48b1c63de90"`);
        await queryRunner.query(`ALTER TABLE "tutor" DROP COLUMN "typeId"`);
        await queryRunner.query(`ALTER TABLE "tutor" DROP CONSTRAINT "UQ_6a8a2d8e7d39c22e48b1c63de90"`);
        await queryRunner.query(`ALTER TABLE "tutor" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "tutor" ADD "userIDId" integer`);
        await queryRunner.query(`ALTER TABLE "tutor" ADD CONSTRAINT "REL_054b60053f3893bde9a7d6c05a" UNIQUE ("userIDId")`);
        await queryRunner.query(`DROP TABLE "tutor_type"`);
    }

}
