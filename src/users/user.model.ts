import { Column, PrimaryKey, Table, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  id: number;
  @Column
  name: string;
  @Column
  email: string;
  @Column
  password: string;
}
