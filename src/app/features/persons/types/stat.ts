import { Marker } from './marker';

type Info = {
  color: string;
  value: number | string;
};

export type PersonKeys =
  | 'nb_persons'
  | 'nb_family_name'
  | 'most_used_family_name'
  | 'more_younger_deceased'
  | 'more_older_deceased'
  | 'more_younger'
  | 'more_older';

export type Stat = {
  person: { [key in PersonKeys]: Info };
  markers: Marker[];
};
