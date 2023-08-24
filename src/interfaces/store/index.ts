import { CategoryInterface } from 'interfaces/category';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StoreInterface {
  id?: string;
  name: string;
  description?: string;
  address: string;
  organization_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  category?: CategoryInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    category?: number;
  };
}

export interface StoreGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  address?: string;
  organization_id?: string;
  user_id?: string;
}
