import { PointRepository } from '../../src/domain/point/application/repositories/point-repository'
import { Point } from '../../src/domain/point/enterprise/entities/point'

export class InMemoryPointRepository implements PointRepository {
  public items: Point[] = []

  async create(point: Point): Promise<void> {
    this.items.push(point)
  }

  async findById(id: string): Promise<Point | null> {
    const point = this.items.find((item) => item.id.toString() === id)

    if (!point) return null

    return point
  }

  async save(point: Point): Promise<void> {
    const itemIndex = this.items.findIndex((i) => i.id === point.id)

    this.items[itemIndex] = point
  }
}
