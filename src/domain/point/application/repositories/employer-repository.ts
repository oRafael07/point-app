import { Employer } from '../../enterprise/entities/employer'

export interface EmployerRepository {
  create(employer: Employer): Promise<void>
  findByEnrollment(enrollment: number): Promise<Employer | null>
}
