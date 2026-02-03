import { EventTypeId } from './event-types';

export interface Events {
  id: string;
  date: Date;
  description: string;
  event_type_id: EventTypeId;
}
