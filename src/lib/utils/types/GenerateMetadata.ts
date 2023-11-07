import type {Metadata} from "next"

export type GenerateMetadata<TParams> = (params: TParams) => Promise<Metadata>
