import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Store } from '@ngrx/store';
import { shopinglsStateModel } from './shopping-ngrx.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppinglistState: Observable<{ingredient:Ingredient[]}>;
  private subscription: Subscription;

  constructor(private slService: ShoppingListService,
    private store:Store<shopinglsStateModel>) { }

  ngOnInit() {
    this.shoppinglistState = this.store.select('shoppingList');
     }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
