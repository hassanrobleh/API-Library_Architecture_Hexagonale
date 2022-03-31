import { MockCategoryProvider } from "../../data/mock/mockCategoryProvider"
import { DeleteCategory } from '../../../../src/domain/Application/Category/UseCase/DeleteCategory/DeleteCategory';


describe('get category', () => {
    const mockCategoryProvider = new MockCategoryProvider()
    const deleteCategory = new DeleteCategory(mockCategoryProvider)
    it('getcategory', async () => {
        const {message} = await deleteCategory.execute(1)
        console.log(message)
        expect(message).toBe('Le category a bien été supprimé')
    })
})