import { Router } from "express";

import { CreateSpecificationController } from "../../../../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../../../../modules/cars/useCases/listSpecifications/ListSpecificationsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

// specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post(
    "/specifications",
    ensureAuthenticated,
    createSpecificationController.handle
);

specificationsRoutes.get(
    "/specifications",
    ensureAuthenticated,
    listSpecificationsController.handle
);

export { specificationsRoutes };
