import { CountryId } from './countries';

export type RegionId = string;

export interface Regions {
  id: RegionId;
  name: string;
  country_id: CountryId;
}
