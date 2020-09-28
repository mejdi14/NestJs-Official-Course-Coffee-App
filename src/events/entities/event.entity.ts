import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Event {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

@Column('json')
  payload: Record<string, any>
}
