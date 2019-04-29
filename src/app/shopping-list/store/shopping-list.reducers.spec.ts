import { shoppingListReducer, initialState } from './shopping-list.reducers';
import { AddIngredientAction, AddIngredientsAction, UpdateIngredientsAction, DeleteIngredientsAction } from './shopping-list.actions';
import { Ingredient } from 'src/app/shared/ingredient.model';


fdescribe('SettingsReducer', () => {
    it('should return default state', () => {
      const action = {} as any;
      const state = shoppingListReducer(undefined, action);
      expect(state).toBe(initialState);
    });
  
    it('should add ingredient', () => {
        const newIngredient =new Ingredient("Banana", 5);
        const mockState = {
            ingredients: [new Ingredient("Apples", 5),
            new Ingredient("Tomatoes", 10),
            new Ingredient("Banana", 5)]
          };
      const action = new AddIngredientAction(newIngredient);
      const state1 = shoppingListReducer(undefined, action);
      expect(state1).toEqual(mockState);
    });
  
    it('should add ingredient', () => {
        const newIngredients =[new Ingredient("Pine", 5),
        new Ingredient("fig", 5)];
        const mockState = {
            ingredients: [new Ingredient("Apples", 5),
            new Ingredient("Tomatoes", 10),
            new Ingredient("Pine", 5),
            new Ingredient("fig", 5)]
          };
      const action = new AddIngredientsAction(newIngredients);
      const state1 = shoppingListReducer(undefined, action);
      expect(state1).toEqual(mockState);
    });


    // it('should update theme', () => {
    //   const action = new ActionSettingsChangeTheme({ theme: 'dark' });
    //   const state = shoppingListReducer(undefined, action);
    //   expect(state.theme).toEqual('dark');
    // });
  
   
  
    // it('should update hour', () => {
    //   const action = new ActionSettingsChangeHour({
    //     hour: 7
    //   });
    //   const state = shoppingListReducer(undefined, action);
    //   expect(state.hour).toEqual(7);
    // });
  });