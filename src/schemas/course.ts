import { z } from "zod";

export const courseSchema = z.object({
  course_name: z.string().min(2, {
    message: "El nombre del curso debe tener al menos 2 caracteres",
  }),
  credits: z.number().min(2, {
    message: "La cantidad de creditos deben de ser de forma numerica (ejem. 3)",
  }),
  description: z
    .string()
    .min(2, { message: "La descripcion debe de tener al menos 2 caracteres" }),
  teacher_id: z
    .number()
    .min(2, { message: "El id del profesor debe de ser un numero" }),
});
