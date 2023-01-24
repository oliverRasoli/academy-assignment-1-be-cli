import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

/**
 * This entity contains the profile information for a user that is not login related.
 * All login related information is stored in the supabase builtin table 'auth.users'
 * which this entity is related to. The constraint to that table cannot be made through typeorm
 * since it is in another schema but it is created through an sql script (SQL/constraints/profile-constraint.sql)
 * which is executed after running the 'npm run sync' command
 */
@Entity()
export class Profiles {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  created_at: string;
}
