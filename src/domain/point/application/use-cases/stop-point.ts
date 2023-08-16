import { PointRepository } from '../repositories/point-repository'

interface StopPointUseCaseRequest {
  pointId: string
}

export class StopPointUseCase {
  constructor(private readonly pointRepository: PointRepository) {}

  async execute({ pointId }: StopPointUseCaseRequest) {
    const point = await this.pointRepository.findById(pointId)

    if (!point) throw new Error('Point not found')

    point.endAt = new Date()

    await this.pointRepository.save(point)
  }
}
