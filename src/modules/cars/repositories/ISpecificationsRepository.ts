import { Specification } from "../infra/typeorm/entities/Specification";

interface ISpecificationsRepositoryDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ name, description }: ISpecificationsRepositoryDTO): Promise<void>;
    findByName(name: string): Promise<Specification | undefined>;
    list(): Promise<Specification[]>;
}

export { ISpecificationsRepository, ISpecificationsRepositoryDTO };
