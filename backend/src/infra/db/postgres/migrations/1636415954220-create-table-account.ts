import { MigrationInterface, QueryRunner, Table, TableUnique } from 'typeorm'

export class createTableAccount1603911069860 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'account',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'name',
            type: 'varchar',
            length: '200'
          },
          {
            name: 'email',
            type: 'varchar',
            length: '150'
          },
          {
            name: 'password',
            type: 'varchar',
            length: '500'
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

    await queryRunner.createUniqueConstraint('account', new TableUnique({
      columnNames: ['email']
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('account')
  }
}
