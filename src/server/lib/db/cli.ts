import "../env"

export default import("./config").then(({getConfig}) => getConfig())
