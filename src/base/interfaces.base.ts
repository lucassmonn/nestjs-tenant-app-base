export interface RequestWithUser extends Request {
  user: {
    id: string
    email: string
    role: string
  }
}

export interface DomainError {
  message: string
  status: number
  code: string
}
