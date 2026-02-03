import { DepartmentId } from './departments';

export type CityId = string;

export interface Cities {
  id: CityId;
  name: string;
  longitude: number;
  latitude: number;
  department_id: DepartmentId;
}
