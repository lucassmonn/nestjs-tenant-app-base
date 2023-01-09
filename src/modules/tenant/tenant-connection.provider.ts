import { Injectable } from "@nestjs/common"
import { Connection, createConnection } from "mongoose"

@Injectable()
export class TenantConnectionProvider {
  private connections: { [slug: string]: Connection } = {}

  async getConnection(slug: string): Promise<Connection> {
    if (!this.connections[slug]) {
      this.connections[slug] = createConnection(`mongodb://localhost/${slug}`)
    }
    return this.connections[slug]
  }
}
