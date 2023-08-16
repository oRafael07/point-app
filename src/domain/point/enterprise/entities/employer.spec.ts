import { Employer } from "./employer"

describe("[ ENTITIES ] Employer", () => {
  it('should be able to create a employer', () => {
    const employer = Employer.create({
      firstName: 'John',
      lastName: 'Doe',
      enrollment: 1
    })

    expect(employer).toBeTruthy()
  })
})