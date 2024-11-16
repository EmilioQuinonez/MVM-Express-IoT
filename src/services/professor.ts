import { Professor } from "../interfaces/professor";
import {
  findAllProfessor,
  insertProfessor,
  updateProfessor,
  deleteProfessor,
} from "../models/professor";

// Obtener todos los alumnos
export const findAll = async (limit: number, offset: number) => {
  return await findAllProfessor(limit, offset);
};

export const insert = async (student: Professor) => {
  return await insertProfessor(student);
};

export const update = async (id: number, student: Professor) => {
  return await updateProfessor(id, student);
};

export const deleteById = async (id: number) => {
  return await deleteProfessor(id);
};
