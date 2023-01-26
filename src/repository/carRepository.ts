import prisma from "../config/database.js";
import { Cars } from "../protocols/protocols.js";

async function getCars() {
    // const data = await db.query(`SELECT * FROM cars`);
    // return data.rows;
    return prisma.cars.findMany();
}

async function getCar(id: number) {
    // const data = await db.query(`SELECT * FROM cars WHERE id = $1`, [id]);
    // return data.rows[0];
    return prisma.cars.findUnique({ where: { id: id } });
}

async function getCarWithLicensePlate(licensePlate: string) {
    // const data = await db.query(
    //     `SELECT * FROM cars WHERE "licensePlate" = $1`,
    //     [licensePlate]
    // );
    // return data.rows[0];
    return prisma.cars.findUnique({ where: { licensePlate: licensePlate } });
}

async function createCar(newCar: Cars) {
    // await db.query(
    //     `INSERT INTO cars (model, "licensePlate", year, color)
    //  VALUES ($1, $2, $3, $4)`,
    //     [model, licensePlate, year, color]
    // );

    return prisma.cars.create({ data: newCar });
}

async function deleteCar(id: number) {
    // await db.query(`DELETE FROM cars WHERE id = $1`, [id]);
    return prisma.cars.delete({ where: { id: id } });
}

const carRepository = {
    getCar,
    getCarWithLicensePlate,
    getCars,
    createCar,
    deleteCar,
};

export default carRepository;
