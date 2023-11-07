import {Entity, Property, Unique} from "@mikro-orm/core"

import {Record} from "./Record"

@Entity({tableName: "user"})
export class User extends Record {
  @Property({type: "varchar"})
  @Unique()
  login!: string

  @Property({type: "varchar"})
  @Unique()
  email!: string

  @Property({type: "varchar"})
  password!: string
}
