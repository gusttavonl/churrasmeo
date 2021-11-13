import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class createTableBarbecue1636415954230 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'barbecue',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'account_id',
            type: 'uuid',
            isNullable: false
          },

          {
            name: 'description',
            type: 'varchar',
            length: '500'
          },
          {
            name: 'information',
            type: 'varchar',
            length: '150'
          },
          {
            name: 'value',
            type: 'numeric(5,2)',
            isNullable: true
          },
          {
            name: 'date',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
    await queryRunner.createForeignKey(
      'barbecue',
      new TableForeignKey({
        name: 'account_fk',
        columnNames: ['account_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'account'
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('barbecue')
  }
}
