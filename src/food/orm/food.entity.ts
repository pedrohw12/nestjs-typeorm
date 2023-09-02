// src/infrastructure/entities/food.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('foods') // this maps the Food entity to the 'foods' table in your DB
export class Food {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('float')
  protein: number;

  @Column('float')
  carb: number;

  @Column('float')
  fat: number;

  @Column('float')
  calorie_count: number;

  @Column()
  serving_size: string; // This could be '1 cup', '100g', etc.

  // Any other columns/relations can be added below as needed
}
