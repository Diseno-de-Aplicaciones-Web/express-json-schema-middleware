const tareaJSONSchema = {
    type: "object",
    properties: {
        id: { type: "integer" },
        descripcion: { type: "string" },
        rematada: { type: "boolean"}
    },
    required: ["id", "descripcion", "rematada"]
}

export default tareaJSONSchema