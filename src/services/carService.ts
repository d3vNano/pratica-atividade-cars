import notFoundError from "../errors/notFoundError.js";
import conflictError from "../errors/conflictError.js";
import carRepository from "../repository/carRepository.js";
import { Cars } from "../protocols/protocols.js";

async function getCars() {
    const cars = await carRepository.getCars();
    return cars;
}

async function getCar(id: number) {
    const car = await carRepository.getCar(id);
    if (!car) {
        throw notFoundError();
    }

    return car;
}

async function createCar(newCar: Cars) {
    const { licensePlate } = newCar;
    const car = await carRepository.getCarWithLicensePlate(licensePlate);
    if (car) {
        throw conflictError(
            `Car with license plate ${licensePlate} already registered.`
        );
    }

    await carRepository.createCar(newCar);
}

async function deleteCar(id: number) {
    await getCar(id);
    await carRepository.deleteCar(id);
}

const carService = {
    getCars,
    getCar,
    createCar,
    deleteCar,
};

export default carService;
