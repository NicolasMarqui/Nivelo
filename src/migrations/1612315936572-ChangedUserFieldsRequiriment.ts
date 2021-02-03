import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangedUserFieldsRequiriment1612315936572 implements MigrationInterface {
    name = 'ChangedUserFieldsRequiriment1612315936572'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "dateBirth" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."dateBirth" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "sex" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."sex" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "country" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."country" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "city" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."city" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "avatar" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."avatar" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "user"."avatar" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "avatar" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."city" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "city" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."country" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "country" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."sex" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "sex" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."dateBirth" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "dateBirth" SET NOT NULL`);
    }

}
