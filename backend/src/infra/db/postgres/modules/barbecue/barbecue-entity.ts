import { BarbecueModel } from '@/domain/models/Barbecue'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany
} from 'typeorm'
import { AccountEntity } from '../account/account-entity'
import { ParticipantsEntity } from '../participants/participants-entity'

@Entity('barbecue')
export class BarbecueEntity implements BarbecueModel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => AccountEntity)
  @JoinColumn({ name: 'account_id', referencedColumnName: 'id' })
  account: AccountEntity

  @OneToMany(() => ParticipantsEntity, participantsEntity => participantsEntity.barbecue)
  participants: ParticipantsEntity[]

  @Column()
  description: string

  @Column()
  information: string

  @Column()
  value: number

  @Column()
  date: Date

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
