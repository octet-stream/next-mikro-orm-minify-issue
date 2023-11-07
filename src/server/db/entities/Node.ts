import {PrimaryKey} from "@mikro-orm/core"

export abstract class Node {
  @PrimaryKey()
  id: string = crypto.randomUUID()
}
