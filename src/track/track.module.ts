import {Module} from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entity/comment.entity';
import { Track } from './entity/track.entity';
import {TrackController} from "./track.controller"
import { TrackService } from "./track.service"

@Module({
    imports: [TypeOrmModule.forFeature([Track, Comment])],
    controllers: [TrackController],
    providers: [TrackService]
})

export class TrackModule {}