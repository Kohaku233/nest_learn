import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateBlogDto, UpdateBlogDto } from './dto/blog.dto';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(Blog)
        private blogRepository: Repository<Blog>,
    ) {}

    create(createBlogDto: CreateBlogDto) {
        const newBlog = this.blogRepository.create(createBlogDto);
        return this.blogRepository.save(newBlog);
    }

    findAll() {
        return this.blogRepository.find();
    }

    findOne(id: number) {
        return this.blogRepository.findOne({ where: { id } });
    }

    async update(id: number, updateBlogDto: UpdateBlogDto) {
        await this.blogRepository.update(id, updateBlogDto);
        return this.blogRepository.findOne({ where: { id } });
    }

    async remove(id: number) {
        const blog = await this.blogRepository.findOne({ where: { id } });
        if (blog) {
            await this.blogRepository.remove(blog);
        }
        return blog;
    }
}
