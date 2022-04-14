/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { IsNumber, IsOptional } from "class-validator";

/* eslint-disable prettier/prettier */
export class GetPaginatedTodoDto{
    @IsNumber()
    @IsOptional()
    @Type(()=>Number)
    page: number;
    
    @Type(()=>Number)
    @IsNumber()
    @IsOptional()
    item:number;
}