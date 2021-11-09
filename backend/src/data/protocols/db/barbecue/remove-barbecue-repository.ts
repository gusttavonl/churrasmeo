export interface RemoveBarbecueRepository {
  remove: (id: string) => Promise<number>
}
