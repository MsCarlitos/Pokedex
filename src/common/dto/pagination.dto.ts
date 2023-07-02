import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDTO {
    @IsOptional()
    @IsPositive()
    @IsNumber()
    @Min(1)
    @IsOptional()
    limit?: number;

    @IsOptional()
    @IsPositive()
    @IsOptional()
    @IsNumber()
    offset?:number
}