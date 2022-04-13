import { GetCategories } from '../../../../src/domain/Application/Category/UseCase/GetCategories/GetCategories';
import { MockCategoryProvider } from '../../data/mock/mockCategoryProvider';
import { categories } from '../../data/categoryData';


describe('get all categories', () => {

    const mockCategoriesProvider = new MockCategoryProvider()
    const getCategories = new GetCategories(mockCategoriesProvider)
    it('getcategories', async () => {
        const result = await getCategories.execute()
        console.log(result.categories)
        expect(result.categories).toEqual(categories)
    })
})