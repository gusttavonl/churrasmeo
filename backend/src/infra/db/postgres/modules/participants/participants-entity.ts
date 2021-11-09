import { ParticipantsModel } from '@/domain/models/participants'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm'
import { BarbecueEntity } from '../barbecue/barbecue-entity'

@Entity('participants')
export class ParticipantsEntity implements ParticipantsModel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => BarbecueEntity)
  @JoinColumn({ name: 'barbecue_id', referencedColumnName: 'id' })
  barbecue: BarbecueEntity

  @Column()
  name: string

  @Column()
  value: number

  @Column()
  value_suggestions_with_drink: number

  @Column()
  value_suggestions_with_out_drink: number

  @Column()
  date: Date

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
