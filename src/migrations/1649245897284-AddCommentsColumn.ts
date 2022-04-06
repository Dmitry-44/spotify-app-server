import { MigrationInterface, QueryRunner } from "typeorm"

export class AddCommentsColumn1649245897284 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query('ALTER TABLE track ADD comments varchar(255)')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query('ALTER TABLE track DROP comments')
    }

}
