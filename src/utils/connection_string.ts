export const connectionString = (): string => {
  return `${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`
}
