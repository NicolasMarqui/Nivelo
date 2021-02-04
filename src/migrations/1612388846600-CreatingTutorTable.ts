import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatingTutorTable1612388846600 implements MigrationInterface {
    name = 'CreatingTutorTable1612388846600'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tutor" ("id" SERIAL NOT NULL, "description" text, "rating" double precision NOT NULL DEFAULT '0', "amountClasses" integer NOT NULL DEFAULT '0', "amountStudents" integer NOT NULL DEFAULT '0', "instructionalVideo" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userIDId" integer, CONSTRAINT "REL_054b60053f3893bde9a7d6c05a" UNIQUE ("userIDId"), CONSTRAINT "PK_984f6d98173bd54eb367e727491" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tutor" ADD CONSTRAINT "FK_054b60053f3893bde9a7d6c05a4" FOREIGN KEY ("userIDId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tutor" DROP CONSTRAINT "FK_054b60053f3893bde9a7d6c05a4"`);
        await queryRunner.query(`DROP TABLE "tutor"`);
    }

}
