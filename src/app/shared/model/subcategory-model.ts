import { TopicSubcategoryModel } from './topic-subcategory-model';
import { TopicModel } from './topic-model';
import { CategoryModel } from 'src/app/shared/model/category-model';
export interface SubcategoryModel {
  id?: number;
  name?: string;
  categoryId?: number;
  category?: CategoryModel;

  topics?: TopicSubcategoryModel[];
}
