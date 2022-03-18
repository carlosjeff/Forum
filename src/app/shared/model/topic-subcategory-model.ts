import { SubcategoryModel } from './subcategory-model';
import { TopicModel } from './topic-model';
export interface TopicSubcategoryModel {
  topicsId: number;
  topcs: TopicModel;

  subcategoryId: number;
  subcategory: SubcategoryModel;
}
