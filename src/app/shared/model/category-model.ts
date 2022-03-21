import { SubcategoryModel } from './subcategory-model';
export interface CategoryModel {
  id?: number;
  name?: string;
  color?: 'blue' | 'green' | 'yellow' | 'cyan' | 'pink' | 'indigo' | 'red' | 'teal' | 'orange' | 'bluegray' | 'purple' ;
  qtdTopics?: number;
  subcategorys?: SubcategoryModel[]
}
