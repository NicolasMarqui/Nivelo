import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatedFeedbackTable1612751675211 implements MigrationInterface {
    name = 'CreatedFeedbackTable1612751675211'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_platform_account" ("userPlatformAccount" SERIAL NOT NULL, "userId" integer NOT NULL, "platformId" integer NOT NULL, "account" character varying NOT NULL, CONSTRAINT "PK_1065975ea89e5a2b16df94cacb8" PRIMARY KEY ("userPlatformAccount"))`);
        await queryRunner.query(`CREATE TABLE "platforms" ("id" SERIAL NOT NULL, "name" character varying(500) NOT NULL, "icon" text, "account" text, CONSTRAINT "PK_3b879853678f7368d46e52b81c6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "feedback" ("id" SERIAL NOT NULL, "content" text, "rating" integer DEFAULT '0', "tutorID" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_8389f9e087a57689cd5be8b2b13" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_platforms_platforms" ("userId" integer NOT NULL, "platformsId" integer NOT NULL, CONSTRAINT "PK_8af2c4d80f5571a14e8bf64c925" PRIMARY KEY ("userId", "platformsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e7a1d57212aefb7cda37999a25" ON "user_platforms_platforms" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f8d9a0975a542f59d8a7fcda30" ON "user_platforms_platforms" ("platformsId") `);
        await queryRunner.query(`ALTER TABLE "category" ALTER COLUMN "icon" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."icon" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user_platform_account" ADD CONSTRAINT "FK_122bbbcdec97c1b5e8dd1298376" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_platform_account" ADD CONSTRAINT "FK_edf33e55f97c0d3ac66406bce9f" FOREIGN KEY ("platformId") REFERENCES "platforms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "feedback" ADD CONSTRAINT "FK_4a39e6ac0cecdf18307a365cf3c" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_platforms_platforms" ADD CONSTRAINT "FK_e7a1d57212aefb7cda37999a258" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_platforms_platforms" ADD CONSTRAINT "FK_f8d9a0975a542f59d8a7fcda301" FOREIGN KEY ("platformsId") REFERENCES "platforms"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_platforms_platforms" DROP CONSTRAINT "FK_f8d9a0975a542f59d8a7fcda301"`);
        await queryRunner.query(`ALTER TABLE "user_platforms_platforms" DROP CONSTRAINT "FK_e7a1d57212aefb7cda37999a258"`);
        await queryRunner.query(`ALTER TABLE "feedback" DROP CONSTRAINT "FK_4a39e6ac0cecdf18307a365cf3c"`);
        await queryRunner.query(`ALTER TABLE "user_platform_account" DROP CONSTRAINT "FK_edf33e55f97c0d3ac66406bce9f"`);
        await queryRunner.query(`ALTER TABLE "user_platform_account" DROP CONSTRAINT "FK_122bbbcdec97c1b5e8dd1298376"`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."icon" IS NULL`);
        await queryRunner.query(`ALTER TABLE "category" ALTER COLUMN "icon" SET NOT NULL`);
        await queryRunner.query(`DROP INDEX "IDX_f8d9a0975a542f59d8a7fcda30"`);
        await queryRunner.query(`DROP INDEX "IDX_e7a1d57212aefb7cda37999a25"`);
        await queryRunner.query(`DROP TABLE "user_platforms_platforms"`);
        await queryRunner.query(`DROP TABLE "feedback"`);
        await queryRunner.query(`DROP TABLE "platforms"`);
        await queryRunner.query(`DROP TABLE "user_platform_account"`);
    }

}
