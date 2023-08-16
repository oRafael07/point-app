import { InMemoryPointRepository } from 'test/repositories/in-memory-point-repository'
import { CreatePointUseCase } from './create-point'
import { Employer } from '../../enterprise/entities/employer'

let inMemoryPointRepository: InMemoryPointRepository
let sut: CreatePointUseCase

describe('Create a point', () => {
  beforeEach(() => {
    inMemoryPointRepository = new InMemoryPointRepository()
    sut = new CreatePointUseCase(inMemoryPointRepository)
  })

  it('shoud be able to create a point', async () => {
    const employer = Employer.create({
      enrollment: 1234,
      firstName: 'John',
      lastName: 'Doe',
    })

    await sut.execute({
      employerId: employer.id.toString(),
    })

    expect(inMemoryPointRepository.items).toHaveLength(1)
    expect(inMemoryPointRepository.items[0].employerId).toEqual(employer.id)
  })
})
