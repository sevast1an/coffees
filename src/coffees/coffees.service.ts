import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [];

  findAll(): Coffee[] {
    return this.coffees;
  }

  findOne(id: string): Coffee {
    return this.coffees.find(item => item.id === +id);
  }

  create(createCoffeeDto: any): void {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any): Coffee {
    const existingCoffee = findOne(id);
    if (existingCoffee) {
      //update the existing coffee
    }
  }

  remove(id: string): void {
    const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
