import { OrderInterface } from 'interfaces/order';
import { CategoryInterface } from 'interfaces/category';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  category_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];
  category?: CategoryInterface;
  user?: UserInterface;
  _count?: {
    order?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  category_id?: string;
  user_id?: string;
}
