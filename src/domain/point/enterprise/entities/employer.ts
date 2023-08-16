import { EntityBase } from "../../../../core/entities/entity";
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import { Optional } from "../../../../core/types/optional";
import { Point } from "./point";

export interface EmployerProps {
  firstName: string
  lastName: string
  enrollment: number
}

export class Employer extends EntityBase<EmployerProps> {
  get firstName() {
    return this.props.firstName
  }

  get lastName() {
    return this.props.lastName
  }

  get enrollment() {
    return this.props.enrollment
  }

  static create(props: EmployerProps, id?: UniqueEntityID) {
    const employer = new Employer({
      ...props
    }, id)

    return employer
  }
}