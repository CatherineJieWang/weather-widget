import {Weather} from '../../common/interfaces'
export interface SearchResult {
  searchResult?: Location[];
  setCity?: any;
  setOpen?: any;
  setWeathers?:any;
  setInputValue?:any;
}

export interface InputBlockProps {
  setWeathers?: any;
  city?: string;
  setCity?:any;
}

export interface Location {
  title?: string;
  location_type?: string;
  woeid?: number;
  latt_long?: string;
}
