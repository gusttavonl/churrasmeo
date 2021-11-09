export interface RemoveParticipantsRepository {
  remove: (id: string) => Promise<number>
}
