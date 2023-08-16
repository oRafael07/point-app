import { InMemoryEmployerRepository } from 'test/repositories/in-memory-employer-repository'
import { RegisterEmployerUseCase } from './register-employer'
import { Employer } from '../../enterprise/entities/employer'

let inMemoryEmployerRepository: InMemoryEmployerRepository
let sut: RegisterEmployerUseCase

describe('Register Employer', () => {
  beforeEach(() => {
    inMemoryEmployerRepository = new InMemoryEmployerRepository()
    sut = new RegisterEmployerUseCase(inMemoryEmployerRepository)
  })

  it('should be able register a user', async () => {
    const employer = Employer.create({
      enrollment: 1234,
      firstName: 'John',
      lastName: 'Doe',
    })

    await sut.execute(employer)

    expect(inMemoryEmployerRepository.items).toHaveLength(1)
    expect(inMemoryEmployerRepository.items[0].enrollment).toEqual(1234)
  })

  it('should be not able register a user if enrollment is already registered', async () => {
    const employer = Employer.create({
      enrollment: 1234,
      firstName: 'John',
      lastName: 'Doe',
    })

    await inMemoryEmployerRepository.create(employer)

    await expect(() => sut.execute(employer)).rejects.toBeInstanceOf(Error)
  })
})
