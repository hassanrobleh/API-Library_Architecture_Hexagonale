import { CategoryProvider } from "../providers/CategoryProvider"
import { AddCategory } from '../../../domain/Application/Category/UseCase/AddCategory/AddCategory';
import { GetCategories } from '../../../domain/Application/Category/UseCase/GetCategories/GetCategories';
import { GetCategory } from "../../../domain/Application/Category/UseCase/GetCategory/GetCategory";
import { UpdateCategory } from '../../../domain/Application/Category/UseCase/UpdateCategory/UpdateCategory';
import { DeleteCategory } from '../../../domain/Application/Category/UseCase/DeleteCategory/DeleteCategory';

export const provider = new CategoryProvider

const addCategoryAdapter = new AddCategory(provider)
const getCategoryAdapter = new GetCategory(provider)
const getCategoriesAdapter = new GetCategories(provider)
const updateCategoryAdapter = new UpdateCategory(provider)
const deleteCategoryAdapter = new DeleteCategory(provider)

export {
    addCategoryAdapter,
    getCategoryAdapter,
    getCategoriesAdapter,
    updateCategoryAdapter,
    deleteCategoryAdapter
}