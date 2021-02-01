import {Weather} from '../../../common/interfaces'
import {Dispatch, SetStateAction} from 'react'
export interface SearchResult {
  searchResult?: Location[];
  setCity: Dispatch<SetStateAction<string >>;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setWeathers:Dispatch<SetStateAction<Weather[]>>;
  setInputValue:Dispatch<SetStateAction<string>>;
}

export interface InputBlockProps {
  setWeathers: Dispatch<SetStateAction<Weather[]>>;
  city?: string;
  setCity:Dispatch<SetStateAction<string>>;
}

export interface Location {
  title?: string;
  location_type?: string;
  woeid?: number;
  latt_long?: string;
}
