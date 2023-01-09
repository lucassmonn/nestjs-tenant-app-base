import { MongoClient } from "mongodb"

export const useDb = async (
  cb: (client: MongoClient) => Promise<void>
): Promise<void> => {
  const client = new MongoClient(process.env.DATABASE_HOST)
  try {
    await client.connect()
    await cb(client)
  } finally {
    await client.close()
  }
}
