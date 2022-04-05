import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {Track} from './track.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Track, (track) => track.comments)
  track: Track;

  @Column()
  username: string;

  @Column()
  text: string;

}