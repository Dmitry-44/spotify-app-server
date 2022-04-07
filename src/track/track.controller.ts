import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { CreateTrackDto } from "./dto/create-track.dto";
import { CreateCommentDto } from "./dto/create-comment.dto";
import {TrackService} from "./track.service"
import {UseInterceptors} from "@nestjs/common"
import {FileFieldsInterceptor} from "@nestjs/platform-express"
import {UploadedFiles} from "@nestjs/common"

@Controller('tracks')
export class TrackController {

    constructor(private trackService: TrackService) {}


    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
        { name: 'audio', maxCount: 1 },
    ]))
    create(@UploadedFiles() files, @Body() dto: CreateTrackDto) {
        const {picture, audio} = files
        return this.trackService.create(dto, picture[0], audio[0])
    }
    @Get()
    getAll() {
        return this.trackService.getAll();
    }
    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.trackService.getOne(id)
    }
    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.trackService.delete(id)
    }
    @Post('/comment')
    CreateComment(@Body() dto: CreateCommentDto) {
        return this.trackService.addComment(dto)
    }
}