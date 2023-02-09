import { parse as csvParse } from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { CategoriesRepository } from "../../infra/typeorm/repositories/categoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}

@injectable()
class ImportCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoryRepository: CategoriesRepository
    ) {}

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);

            const categories: IImportCategory[] = [];

            const parseFile = csvParse();

            stream.pipe(parseFile);

            parseFile
                .on("data", async (line) => {
                    // console.log(line);
                    const [name, description] = line;
                    categories.push({
                        name,
                        description,
                    });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const receiveCategories = await this.loadCategories(file);
        // console.log(receiveCategories);
        receiveCategories.map(async (category) => {
            const { name, description } = category;

            const existCategory = await this.categoryRepository.findByName(
                name
            );

            if (!existCategory) {
                this.categoryRepository.create({ name, description });
            }
        });
    }
}

export { ImportCategoryUseCase };
