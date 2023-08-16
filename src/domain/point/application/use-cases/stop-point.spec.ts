import { InMemoryPointRepository } from 'test/repositories/in-memory-point-repository'
import { Employer } from '../../enterprise/entities/employer'
import { Point } from '../../enterprise/entities/point'
import { StopPointUseCase } from './stop-point'

let inMemoryPointRepository: InMemoryPointRepository
let sut: StopPointUseCase

describe('Stop a point', () => {
  beforeEach(() => {
    inMemoryPointRepository = new InMemoryPointRepository()
    sut = new StopPointUseCase(inMemoryPointRepository)
  })

  it('shoud be able to stop a point', async () => {
    const employer = Employer.create({
      enrollment: 1234,
      firstName: 'John',
      lastName: 'Doe',
    })

    const point = Point.create({
      employerId: employer.id,
      startAt: new Date(),
    })

    await inMemoryPointRepository.create(point)

    await sut.execute({
      pointId: point.id.toString(),
    })

    expect(inMemoryPointRepository.items).toHaveLength(1)
    expect(inMemoryPointRepository.items[0].endAt).not.toBeNull()
  })

  it('should be able to not stop a point if is not exists', async () => {
    const employer = Employer.create({
      enrollment: 1234,
      firstName: 'John',
      lastName: 'Doe',
    })

    const point = Point.create({
      employerId: employer.id,
      startAt: new Date(),
    })

    await expect(() =>
      sut.execute({
        pointId: point.id.toString(),
      }),
    ).rejects.toBeInstanceOf(Error)
  })
})
