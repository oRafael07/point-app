import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Point } from '../../enterprise/entities/point'
import { PointRepository } from '../repositories/point-repository'

interface CreatePointUseCaseRequest {
  employerId: string
}

export class CreatePointUseCase {
  constructor(private readonly pointRepository: PointRepository) {}

  async execute({ employerId }: CreatePointUseCaseRequest) {
    const point = Point.create({
      employerId: new UniqueEntityID(employerId),
      startAt: new Date(),
    })

    await this.pointRepository.create(point)
  }
}
