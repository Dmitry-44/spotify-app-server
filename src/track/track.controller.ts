import { Controller, Get, Post, Body } from "@nestjs/common";
import { CreateTrackDto } from "./dto/create-track.dto";
import {TrackService} from "./track.service"

@Controller('tracks')
export class TrackController {

    constructor(private trackService: TrackService) {}

    @Post()
    create(@Body() dto: CreateTrackDto) {
        this.trackService.create(dto)
    }
    @Get()
    getAll() {
        return 'HEEEELOO111'
    }

    getOne() {

    }

    delete() {
        
    }
}