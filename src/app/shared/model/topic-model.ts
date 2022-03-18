import { SubcategoryModel } from './subcategory-model';
import { CategoryModel } from './category-model';
export interface TopicModel {
  id?: number;
  name?: string;
  author?: string;
  date?: Date;

  categorys?: SubcategoryModel[];
  replys?: [];
}
