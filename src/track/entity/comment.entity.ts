import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import {Track} from './track.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Track, (track) => track.comments)
  @JoinColumn({name: 'track_id'})
  track: Track;

  @Column()
  username: string;

  @Column()
  text: string;

}