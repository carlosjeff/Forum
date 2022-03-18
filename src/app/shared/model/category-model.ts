import { SubcategoryModel } from './subcategory-model';
export interface CategoryModel {
  id?: number;
  name?: string;
  topics?: number
  color?: 'blue' | 'green' | 'yellow' | 'cyan' | 'pink' | 'indigo' | 'red' | 'teal' | 'orange' | 'bluegray' | 'purple' ;

  subcategory?: SubcategoryModel[]
}
