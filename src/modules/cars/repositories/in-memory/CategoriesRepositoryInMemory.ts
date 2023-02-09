import { Category } from "../../infra/typeorm/entities/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
    categories: Category[] = [];

    async findByName(name: string): Promise<Category | undefined> {
        return this.categories.find((category) => category.name === name);
    }

    async list(): Promise<Category[]> {
        return this.categories;
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
        });

        this.categories.push(category);
    }
}

export { CategoriesRepositoryInMemory };
