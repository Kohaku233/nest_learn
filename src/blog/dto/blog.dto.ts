import { IsNotEmpty } from 'class-validator';

export class CreateBlogDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    summary: string;
    @IsNotEmpty()
    content: string;
}

export class UpdateBlogDto {
    title?: string;
    summary?: string;
    content?: string;
}
