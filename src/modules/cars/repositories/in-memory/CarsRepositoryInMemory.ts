import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "../../infra/typeorm/entities/Car";
import { Category } from "../../infra/typeorm/entities/Category";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
    cars: Car[] = [];
    async create({
        name,
        brand,
        description,
        license_plate,
        daily_rate,
        fine_amount,
        category_id,
    }: ICreateCarDTO): Promise<void> {
        const car = new Car();

        Object.assign(car, {
            name,
            brand,
            description,
            license_plate,
            daily_rate,
            fine_amount,
            category_id,
        });

        this.cars.push(car);
    }
}

export { CarsRepositoryInMemory };
