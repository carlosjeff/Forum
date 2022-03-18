import { TopicSubcategoryModel } from './topic-subcategory-model';
export interface TopicModel {
  id?: number;
  name?: string;
  author?: string;
  date?: Date;

  subcategorys?: TopicSubcategoryModel[];
  replys?: any[];
}
