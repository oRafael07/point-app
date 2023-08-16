import { EmployerRepository } from '@/domain/point/application/repositories/employer-repository'
import { Employer } from '@/domain/point/enterprise/entities/employer'
export class InMemoryEmployerRepository implements EmployerRepository {
  public items: Employer[] = []

  async create(employer: Employer): Promise<void> {
    this.items.push(employer)
  }

  async findByEnrollment(enrollment: number): Promise<Employer | null> {
    const employer = this.items.find((i) => i.enrollment === enrollment)

    if (!employer) return null

    return employer
  }
}
