export interface IFiltersState {
  gender: "male" | "female";
  nat: string;
}

export interface IUsersObject extends IFiltersState {
  cell: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  id: {
    name: string;
    value: string;
  };
  location: {
    country: string;
    city: string;
    postcode: number;
  };
  picture: {
    large: string;
    thumbnail: string;
  };
}

export type TUsersState = { [key: number]: IUsersObject[] };
