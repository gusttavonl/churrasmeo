import { FindAccountByIdRepository } from '@/data/protocols/db/account/find-account-by-id-repository'
import { RemoveAccountRepository } from '@/data/protocols/db/account/remove-account-repository'
import { UpdateAccountRepository } from '@/data/protocols/db/account/update-account-repository'
import { AddAccountRepository } from '@/data/usescases/account/db-accounts-protocols'
import { UpdateAccountParams } from '@/domain/usescasses/account/update-account'
import { makeAccountModel } from '@/tests/unitary/domain/mocks/auth/account/account-mocks'
import { AddAccountParams } from '@/domain/usescasses/account/add-account'
import { AccountModel } from '@/domain/models/account'
import { Hasher } from '@/data/protocols/cryptography/hasher'

export const makeAddAccountRepository = (): AddAccountRepository => {
  class AddAccountRepositoryStub implements AddAccountRepository {
    async add (account: AddAccountParams): Promise<AccountModel> {
      return await new Promise(resolve => resolve(makeAccountModel()))
    }
  }

  return new AddAccountRepositoryStub()
}

export const makeRemoveAccountRepositoryStub = (): RemoveAccountRepository => {
  class RemoveAccountRepositoryStub implements RemoveAccountRepository {
    async remove (accountId: string): Promise<number> {
      return await new Promise(resolve => resolve(1))
    }
  }
  return new RemoveAccountRepositoryStub()
}

export const makeAccountByIdRepository = (): FindAccountByIdRepository => {
  class AccountsByIdRepositoryStub implements FindAccountByIdRepository {
    async findById (idAccount: string): Promise<AccountModel> {
      return await new Promise(resolve => resolve(makeAccountModel()))
    }
  }
  return new AccountsByIdRepositoryStub()
}

export const makeUpdateAccountRepository = (): UpdateAccountRepository => {
  class UpdateAccountRepositoryStub implements UpdateAccountRepository {
    async update (accountId: string, accountData: UpdateAccountParams): Promise<number> {
      return await new Promise(resolve => resolve(1))
    }
  }

  return new UpdateAccountRepositoryStub()
}

export const makeHasherAccountRepository = (): Hasher => {
  class HasherAccountRepository implements Hasher {
    async hash (value: string): Promise<string> {
      return await new Promise(resolve => resolve('any_hash'))
    }
  }

  return new HasherAccountRepository()
}
