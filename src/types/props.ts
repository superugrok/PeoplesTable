import { IFiltersState, TUsersState } from "./states";

interface ICommonProps {
  users: TUsersState;
  page: number;
}

export interface ITableProps extends ICommonProps {
  filters: IFiltersState;
  setFilters: React.Dispatch<React.SetStateAction<IFiltersState>>;
}

export interface IPaginationProps extends ICommonProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface IFiltersProps {
  filters: IFiltersState;
  setFilters: React.Dispatch<React.SetStateAction<IFiltersState>>;
}
