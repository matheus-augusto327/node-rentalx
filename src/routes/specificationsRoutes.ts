import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpeficificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpeficificationService = new CreateSpeficificationService(
    specificationsRepository
  );

  createSpeficificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRoutes };
