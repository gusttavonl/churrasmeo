import { ParticipantsModel } from './participants'

export type BarbecueModel = {
  id: string
  account: { id: string }
  description: string
  information: string
  value: number
  date: Date
  participants: ParticipantsModel[]
  created_at?: Date
  updated_at?: Date
}

export type BarbecueAddParams = {
  account: {
    id: string
  }
  description: string
  information: string
  date: Date
}
