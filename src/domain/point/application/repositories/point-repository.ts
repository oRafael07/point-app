import { Point } from '../../enterprise/entities/point'

export interface PointRepository {
  create(point: Point): Promise<void>
  findById(id: string): Promise<Point | null>
  save(point: Point): Promise<void>
}
