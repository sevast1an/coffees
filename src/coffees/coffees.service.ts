import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [];

  findAll(): Coffee[] {
    return this.coffees;
  }

  findOne(id: string): Coffee {
    const coffee = this.coffees.find(item => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee with ID:${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any): void {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any): Coffee {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      //update the existing coffee
    }
    return existingCoffee;
  }

  remove(id: string): void {
    const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
