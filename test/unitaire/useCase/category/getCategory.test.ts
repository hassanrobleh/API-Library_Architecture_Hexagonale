import { GetCategory } from '../../../../src/domain/Application/Category/UseCase/GetCategory/GetCategory';
import { category } from '../../data/categoryData';
import { MockCategoryProvider } from '../../data/mock/mockCategoryProvider';



describe('get category', () => {

    const mockCategoryProvider = new MockCategoryProvider()
    const getCategory = new GetCategory(mockCategoryProvider)
    it('getcategory', async () => {
        const result = await getCategory.execute(1)
        
        expect(result).toEqual(category)
    })
})