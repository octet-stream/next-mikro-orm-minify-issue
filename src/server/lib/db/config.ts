import {defineConfig} from "@mikro-orm/mysql"

import * as entities from "../../db/entities"

console.log(Object.values(entities))

export const getConfig = async () => defineConfig({
  host: process.env.DB_HOST || undefined,
  port: parseInt(process.env.DB_PORT || "NaN", 10) || undefined,
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  debug: ["development", "debug"].includes(process.env.NODE_ENV),
  entities: Object.values(entities)
})
