import { ParticipantsModel } from './participants'

export interface BarbecueModel {
  id: string
  account: {id: string}
  description: string
  information: string
  value?: number
  date: Date
  participants?: ParticipantsModel[]
  created_at?: Date
  updated_at?: Date
}
