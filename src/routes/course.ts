// routes/usuarios.ts
import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getCourse,
  updateCourse,
} from "../controllers/course";
import validate from "../middlewares/validate";
import { courseSchema } from "../schemas/course";

const router = Router();

// Regresa todos los alumnos en la base de datos
router.get("/", getCourse);
router.post("/", validate(courseSchema), createCourse);
router.put("/:id", validate(courseSchema), updateCourse);
router.delete("/:id", deleteCourse);

export default router;
