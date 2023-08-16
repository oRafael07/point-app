import { Employer } from '../../enterprise/entities/employer'
import { EmployerRepository } from '../repositories/employer-repository'

interface RegisterEmployerUseCaseRequest {
  firstName: string
  lastName: string
  enrollment: number
}

export class RegisterEmployerUseCase {
  constructor(private readonly employerRepository: EmployerRepository) {}

  async execute({
    firstName,
    lastName,
    enrollment,
  }: RegisterEmployerUseCaseRequest) {
    const employerHasExists =
      await this.employerRepository.findByEnrollment(enrollment)

    if (employerHasExists) throw new Error('Employer has already been exists')

    const employer = Employer.create({
      firstName,
      lastName,
      enrollment,
    })

    await this.employerRepository.create(employer)
  }
}
