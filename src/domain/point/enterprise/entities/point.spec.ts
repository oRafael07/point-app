import dayjs from 'dayjs';
import { randomUUID } from "crypto"
import { Point } from "./point"
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';

describe('[ ENTITIES ] Point', () => {
  it('should be able start a point', () => {

    const point = Point.create({
      employerId: new UniqueEntityID(),
      startAt: new Date()
    })

    expect(point).toBeTruthy()
  })

  it('should be able stop a point', () => {
    const point = Point.create({
      employerId: new UniqueEntityID(),
      startAt: new Date()
    })

    point.endAt = dayjs(new Date()).add(1, 'hour').toDate()
    expect(point.endAt).toBeTruthy()
  })

  it('should be able calculate a total hours a point', () => {
    const point = Point.create({
      employerId: new UniqueEntityID(),
      startAt: new Date(),
      endAt: dayjs(new Date()).add(1, 'hour').toDate()
    })

    expect(point.totalHours).toEqual('1 horas 0 minutos')
  })
})