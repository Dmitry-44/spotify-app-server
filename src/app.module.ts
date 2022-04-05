import {Module} from "@nestjs/common"
import {TrackModule} from "./track/track.module"
import { TypeOrmModule } from '@nestjs/typeorm';
import {Track} from './track/entity/track.entity'
import {Comment} from './track/entity/comment.entity'


@Module({
    imports: [
        // TypeOrmModule.forRoot({
        //     type: 'mysql',
        //     host: '31.31.198.99',
        //     port: parseInt(process.env.DB_PORT),
        //     username: process.env.DB_USER,
        //     password: process.env.DB_PASSWORD,
        //     database: process.env.DB_NAME,
        //     entities: [],
        //     synchronize: true,
        // }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '31.31.198.99',
            port: 3306,
            username: 'u1644041_default',
            password: 'yPG2K3CFjDPZja65',
            database: 'u1644041_default',
            entities: [Track, Comment],
            synchronize: true,
        }),
        TrackModule
    ]
})

export class AppModule {

}