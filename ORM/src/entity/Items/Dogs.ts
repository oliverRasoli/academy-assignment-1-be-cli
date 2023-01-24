import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Profiles } from '../auth/Profiles';

@Entity()
export class Dogs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  race_name: string;

  @Column()
  description: string;

  @Column('uuid')
  uuid: string;
}
