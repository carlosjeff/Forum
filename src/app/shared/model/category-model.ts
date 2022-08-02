import { ColorModel } from './color-model';
import { SubcategoryModel } from './subcategory-model';
export interface CategoryModel {
  id: number;
  name: string;
  color: ColorModel;
  colorId: number;
  subcategorys: SubcategoryModel[]
}
