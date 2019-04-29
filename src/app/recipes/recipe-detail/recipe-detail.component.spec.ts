import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { ActivatedRoterStub } from './../stub/activatedRoutestub';
import { shoppingListReducer } from './../../shopping-list/store/shopping-list.reducers';
import { shopinglsStateModel } from './../../shopping-list/shopping-ngrx.model';
import { RecipeDetailComponent } from './recipe-detail.component';
import { By } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngredientsAction } from '../../shopping-list/store/shopping-list.actions'
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RoterStub } from '../stub/RouterStub';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

fdescribe('RecipeDetailComponent', () => {
  let component: RecipeDetailComponent;
  let fixture: ComponentFixture<RecipeDetailComponent>;
  let store: Store<shopinglsStateModel>;
  let dispatchSpy;

 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            StoreModule.forRoot({shoppingList :shoppingListReducer})
          ],
          providers:[RecipeService,ShoppingListService,
            {provide:ActivatedRoute, useClass: ActivatedRoterStub},
        {provide:Router, useClass: RoterStub}],
      declarations: [RecipeDetailComponent]
    }).compileComponents();

    store = TestBed.get(Store);
    fixture = TestBed.createComponent(RecipeDetailComponent);
    component = fixture.componentInstance;
    let route:ActivatedRoterStub = TestBed.get(ActivatedRoute);
    route.push({id: 0});
    component.recipe = new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]);
    fixture.detectChanges();
  }));

  fit('should dispatch change sticky header on sticky header toggle', () => {
    dispatchSpy = spyOn(store, 'dispatch');
    const componentDebug = fixture.debugElement;
    const slider = componentDebug.query(By.css('.abc'));
    slider.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      new AddIngredientsAction(component.recipe.ingredients)
    );
  });
   
});
