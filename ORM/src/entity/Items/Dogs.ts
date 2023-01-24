import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Profiles } from '../auth/Profiles';

/**
 * This entity contains the profile information for a user that is not login related.
 * All login related information is stored in the supabase builtin table 'auth.users'
 * which this entity is related to. The constraint to that table cannot be made through typeorm
 * since it is in another schema but it is created through an sql script (SQL/constraints/profile-constraint.sql)
 * which is executed after running the 'npm run sync' command
 */
@Entity()
export class Dogs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  race_name: string;

  @Column()
  description: string;

  @OneToOne(() => Profiles)
  @JoinColumn()
  uuid: Profiles;
}
