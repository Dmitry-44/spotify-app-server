import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTrackDto } from "./dto/create-track.dto";
import { CreateCommentDto } from "./dto/create-comment.dto";
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

    async create(dto: CreateTrackDto, picture, audio): Promise<Track>{
        const track = await this.tracksRepository.save({...dto, listens: 0})
        return track
    }

    async getAll() {
        const tracks = await this.tracksRepository.find()
        return tracks
    }

    async getOne(id: number): Promise<Track> {
        const track = await this.tracksRepository.findOne({id: id})
        return track
    }

    async delete(id: number): Promise<void> {
        return this.tracksRepository.query('DELETE FROM track WHERE id = ?', [id])
    }

    async addComment(dto: CreateCommentDto): Promise<Comment> {
        let track = await this.tracksRepository.findOne({id: dto.track_id})
        console.log('track', track)
        const comment = await this.commentsRepository.save({...dto})
        track.comments = [comment]
        console.log('track', track)
        await this.tracksRepository.save(track)
        return comment
    }
}