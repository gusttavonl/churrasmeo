export interface RemoveParticipants {
  remove: (id: string) => Promise<number>
}
