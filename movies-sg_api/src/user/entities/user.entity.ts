import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User {

    @PrimaryGeneratedColumn('rowid')
    id: Number;

    @Column({name: 'full_name'})
    full_name: string;

    @Column({name: 'username'})
    username: string;

    @Column({name: 'email'})
    email: string;

    @Column({name: 'password'})
    password: string;

    @Column({name: 'userToken'})
    userToken: string;


}