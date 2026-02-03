import { RegionId } from './regions';

export type DepartmentId = string;

export interface Departments {
  id: DepartmentId;
  name: string;
  region_id: RegionId;
}
