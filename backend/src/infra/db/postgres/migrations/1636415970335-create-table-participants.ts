import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class createTableParticipants1636415970335 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'participants',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'barbecue_id',
            type: 'uuid',
            isNullable: false
          },

          {
            name: 'name',
            type: 'varchar',
            length: '150'
          },
          {
            name: 'value',
            type: 'numeric(5,2)'
          },
          {
            name: 'value_suggestion_with_drink',
            type: 'numeric(5,2)'
          },
          {
            name: 'value_suggestion_without_drink',
            type: 'numeric(5,2)'
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
      'participants',
      new TableForeignKey({
        name: 'barbecue_fk',
        columnNames: ['barbecue_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'barbecue'
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('participants')
  }
}
