import { MockCategoryProvider } from "../../data/mock/mockCategoryProvider"
import { UpdateCategory } from '../../../../src/domain/Application/Category/UseCase/UpdateCategory/UpdateCategory';
import { category } from "../../data/categoryData";



describe('add book', () => {

    const mockCategoryProvider = new MockCategoryProvider()
    const updateCategory = new UpdateCategory(mockCategoryProvider)
    it('add book', async () => {
        const { message } = await updateCategory.execute(1, category)
        expect(message).toBe('Le category a bien été modifié')
    })
})