import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTrackDto } from "./dto/create-track.dto";
import { Comment } from "./entity/comment.entity";
import { Track } from "./entity/track.entity";


@Injectable()
export class TrackService {

    constructor(
        @InjectRepository(Track)
        private tracksRepository: Repository<Track>,
        @InjectRepository(Comment)
        private commentsRepository: Repository<Comment>,
    ) {}

    async create(dto: CreateTrackDto): Promise<Track>{
        const track = await this.tracksRepository.create({...dto, listens: 0})
        return track
    }

    async getAll() {

    }

    async getOne() {

    }

    async delete() {
        
    }
}