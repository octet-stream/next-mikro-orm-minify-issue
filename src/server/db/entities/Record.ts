import {
  Property,
  // Entity
} from "@mikro-orm/core"

import {Node} from "./Node"

// @Entity({abstract: true})
export abstract class Record extends Node {
  @Property({type: Date})
  readonly createdAt: Date = new Date()

  @Property({type: Date, onUpdate: () => new Date()})
  readonly updatedAt: Date = new Date()
}
