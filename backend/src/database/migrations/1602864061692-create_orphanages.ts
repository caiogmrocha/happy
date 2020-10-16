import {MigrationInterface, QueryRunner, Table} from "typeorm";

// Obs.: O nome desta classe NÃO pode ser alterado...
export class createOrphanages1602864061692 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    // Cria a Tabela...
    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true, // Valores positivos
          isPrimary: true,
          isGenerated: true, // Gerada automaticamente...
          generationStrategy: 'increment', // De maneira incremental...
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10, // Nums depois da virgula...
          precision: 2, // Nums antes da virgula...
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10, // Nums depois da virgula...
          precision: 2, // Nums antes da virgula...
        },
        {
          name: 'about',
          type: 'text',
        },
        {
          name: 'instructions',
          type: 'text',
        },
        {
          name: 'opening_hours',
          type: 'varchar',
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false,
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {

    // Dropa a Tabela...
    await queryRunner.dropTable('orphanages');
  }

}
