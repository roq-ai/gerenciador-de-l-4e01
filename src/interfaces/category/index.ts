import { ProductInterface } from 'interfaces/product';
import { StoreInterface } from 'interfaces/store';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CategoryInterface {
  id?: string;
  name: string;
  description?: string;
  store_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  product?: ProductInterface[];
  store?: StoreInterface;
  user?: UserInterface;
  _count?: {
    product?: number;
  };
}

export interface CategoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  store_id?: string;
  user_id?: string;
}
