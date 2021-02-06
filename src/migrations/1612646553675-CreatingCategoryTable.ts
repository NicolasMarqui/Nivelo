import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatingCategoryTable1612646553675 implements MigrationInterface {
    name = 'CreatingCategoryTable1612646553675'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying(250) NOT NULL, "icon" text NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tutor_categories_category" ("tutorId" integer NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_e4f270783d881a3be52f8c5a564" PRIMARY KEY ("tutorId", "categoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_cf115adc5902d91af82f5670de" ON "tutor_categories_category" ("tutorId") `);
        await queryRunner.query(`CREATE INDEX "IDX_39e6e88d5ebd628cbd3e56e748" ON "tutor_categories_category" ("categoryId") `);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "amountTime"`);
        await queryRunner.query(`ALTER TABLE "classes" ADD "amountTimeTaught" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "price" DROP CONSTRAINT "FK_2c06d4bed39d917ee7c1bb5a56a"`);
        await queryRunner.query(`ALTER TABLE "price" DROP CONSTRAINT "PK_d163e55e8cce6908b2e0f27cea4"`);
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "price" ADD CONSTRAINT "PK_d163e55e8cce6908b2e0f27cea4" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "price" ALTER COLUMN "isPromotionalCode" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "price"."isPromotionalCode" IS NULL`);
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "classesId"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "classesId" integer`);
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "PK_e207aa15404e9b2ce35910f9f7f"`);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "classes" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "PK_e207aa15404e9b2ce35910f9f7f" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "price" ADD CONSTRAINT "FK_2c06d4bed39d917ee7c1bb5a56a" FOREIGN KEY ("classesId") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tutor_categories_category" ADD CONSTRAINT "FK_cf115adc5902d91af82f5670dec" FOREIGN KEY ("tutorId") REFERENCES "tutor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tutor_categories_category" ADD CONSTRAINT "FK_39e6e88d5ebd628cbd3e56e748d" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tutor_categories_category" DROP CONSTRAINT "FK_39e6e88d5ebd628cbd3e56e748d"`);
        await queryRunner.query(`ALTER TABLE "tutor_categories_category" DROP CONSTRAINT "FK_cf115adc5902d91af82f5670dec"`);
        await queryRunner.query(`ALTER TABLE "price" DROP CONSTRAINT "FK_2c06d4bed39d917ee7c1bb5a56a"`);
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "PK_e207aa15404e9b2ce35910f9f7f"`);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "classes" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "PK_e207aa15404e9b2ce35910f9f7f" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "classesId"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "classesId" uuid`);
        await queryRunner.query(`COMMENT ON COLUMN "price"."isPromotionalCode" IS NULL`);
        await queryRunner.query(`ALTER TABLE "price" ALTER COLUMN "isPromotionalCode" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "price" DROP CONSTRAINT "PK_d163e55e8cce6908b2e0f27cea4"`);
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "price" ADD CONSTRAINT "PK_d163e55e8cce6908b2e0f27cea4" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "price" ADD CONSTRAINT "FK_2c06d4bed39d917ee7c1bb5a56a" FOREIGN KEY ("classesId") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "amountTimeTaught"`);
        await queryRunner.query(`ALTER TABLE "classes" ADD "amountTime" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`DROP INDEX "IDX_39e6e88d5ebd628cbd3e56e748"`);
        await queryRunner.query(`DROP INDEX "IDX_cf115adc5902d91af82f5670de"`);
        await queryRunner.query(`DROP TABLE "tutor_categories_category"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
