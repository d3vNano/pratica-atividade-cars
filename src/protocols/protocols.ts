export type CarsEntity = {
    id: number;
    model: string;
    licensePlate: string;
    year: number;
    color: string;
    createAt: Date;
};

export type Cars = Omit<CarsEntity, "id" | "createAt">;
