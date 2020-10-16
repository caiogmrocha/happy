import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import Orphanage from './Orphanage';
/**
 * É necessário usar Generics para
 * associar os MODELS com as TABELAS
 * do Banco de Dados.
 */

@Entity('images') // Assoc com a tabela orphanages
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Orphanage, orphanage => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage;
}