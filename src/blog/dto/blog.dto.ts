export class CreateBlogDto {
    title: string;
    summary: string;
    content: string;
}

export class UpdateBlogDto {
    title?: string;
    summary?: string;
    content?: string;
}
