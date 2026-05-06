export interface Person {
  id: number;
  first_name: string;
  first_names: string;
  last_name: string;
  job: string | null;
  gender_id: number;
  age: number | null;
  image_id: number | null;
  description: string | null;
  mother_person: Identity | null;
  father_person: Identity | null;
  spouse_person: Identity | null;
  events: { id: number }[] | [];
  spouse_id: number | null;
  father_id: number | null;
  mother_id: number | null;
  children_as_mother: Identity[] | [];
  children_as_father: Identity[] | [];
  brothers?: Identity[] | [];
}

type Identity = {
  id: number;
  first_name: string;
  last_name: string;
  mother_id?: number;
  father_id?: number;
};
