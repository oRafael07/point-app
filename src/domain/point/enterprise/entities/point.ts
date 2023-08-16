import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'
import { EntityBase } from "../../../../core/entities/entity";
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import 'dayjs/locale/pt-br';
import { Optional } from "../../../../core/types/optional";

dayjs.locale('pt-br');
dayjs.extend(duration);

export interface PointProps {
  employerId: UniqueEntityID
  startAt: Date
  endAt: Date | null
}

export class Point extends EntityBase<PointProps> {

  get employerId() {
    return this.props.employerId
  }

  get startAt() {
    return this.props.startAt
  }

  get endAt(): Date | null {
    return this.props.endAt
  }

  get totalHours(): string {

    const startAt = dayjs(this.startAt)
    const endAt = dayjs(this.endAt)

    const diff = endAt.diff(startAt);
    const duration = dayjs.duration(diff);
    const formattedDuration = duration.format('H [horas] m [minutos]');

    return formattedDuration;
  }

  set employerId(employerId: UniqueEntityID) {
    this.props.employerId = employerId
  }

  set startAt(startAt: Date) {
    this.props.startAt = startAt
  }

  set endAt(endAt: Date) {
    this.props.endAt = endAt
  }

  static create(props: Optional<PointProps, 'endAt'>, id?: UniqueEntityID) {
    const point = new Point({
      ...props,
      endAt: props.endAt ?? null
    }, id)

    return point
  }
}