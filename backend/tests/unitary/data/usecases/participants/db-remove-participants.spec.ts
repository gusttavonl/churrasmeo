import { RemoveParticipantsRepository } from '@/data/protocols/db/participants/remove-participants-repository'
import { DbRemoveParticipants } from '@/data/usescases/participants/db-remove-participants'
import { RemoveParticipants } from '@/domain/usescasses/participants/remove-participants'
import { makeParticipantsByIdRepository, makeRemoveParticipantsRepositoryStub } from '@/tests/unitary/data/mocks/mock-participants'
import { makeBarbecueByIdRepository, makeUpdateBarbecueRepository } from '../../mocks/mock-barbecue'

interface SutTypes {
  removeParticipantsRepositoryStub: RemoveParticipantsRepository
  sut: RemoveParticipants
}

const makeSut = (): SutTypes => {
  const removeParticipantsRepositoryStub = makeRemoveParticipantsRepositoryStub()
  const updateBarbecueRepositoryStub = makeUpdateBarbecueRepository()
  const findByIdBarbecueRepositoryStub = makeBarbecueByIdRepository()
  const findByIdParticipantsRepositoryStub = makeParticipantsByIdRepository()

  const sut = new DbRemoveParticipants(removeParticipantsRepositoryStub,findByIdParticipantsRepositoryStub, findByIdBarbecueRepositoryStub, updateBarbecueRepositoryStub)

  return {
    removeParticipantsRepositoryStub,
    sut
  }
}

describe('DbRemoveParticipants', () => {
  test("Should call remove repository with correct values if debit doesn't have a parent", async () => {
    const { sut, removeParticipantsRepositoryStub } = makeSut()
    const removeSpy = jest.spyOn(removeParticipantsRepositoryStub, 'remove')

    await sut.remove('any_id')
    expect(removeSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should throw if repository throws', async () => {
    const { sut, removeParticipantsRepositoryStub } = makeSut()
    jest.spyOn(removeParticipantsRepositoryStub, 'remove').mockRejectedValue(new Error())

    const promise = sut.remove('any_id')
    await expect(promise).rejects.toThrow(new Error())
  })

  test('Should return the affected row number on success', async () => {
    const { sut } = makeSut()
    const response = await sut.remove('any_id')
    expect(response).toEqual(1)
  })
})
