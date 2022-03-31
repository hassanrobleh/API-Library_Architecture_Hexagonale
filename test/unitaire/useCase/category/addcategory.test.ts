import { MockCategoryProvider } from "../../data/mock/mockCategoryProvider"
import { AddCategory } from '../../../../src/domain/Application/Category/UseCase/AddCategory/AddCategory';
import { category } from "../../data/categoryData";

describe('Add category', () => {

    const mockCategoryProvider = new MockCategoryProvider()
    const addCategory = new AddCategory(mockCategoryProvider)
    it('add category', async () => {

        const { message } = await addCategory.execute(category)
        expect(message).toBe('Le category a bien été ajouté')
    })
})
