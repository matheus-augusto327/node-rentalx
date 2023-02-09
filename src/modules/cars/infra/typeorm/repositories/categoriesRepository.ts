import { getRepository, Repository } from "typeorm";
// import { v4 as uuidV4 } from "uuid";

import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../../../repositories/ICategoriesRepository";
import { Category } from "../entities/Category";

// Signleton

class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = {
            description,
            name,
            // id: uuidV4(),
        };

        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(name: string): Promise<Category | undefined> {
        const category = await this.repository.findOne({ name });
        return category;
    }
}

export { CategoriesRepository };
