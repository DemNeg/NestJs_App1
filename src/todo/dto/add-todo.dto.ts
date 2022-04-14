/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, MaxLength, minLength, MinLength } from "class-validator";

/* eslint-disable prettier/prettier */
export class AddTodoDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(6, { message: "La Taille minimal du champ est de 6 six caractères" })
    @MaxLength(25)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    description: string;
}