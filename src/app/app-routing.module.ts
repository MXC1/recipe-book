import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const appRoutes: Routes =
    [
        {
            path: '',
            redirectTo: '/recipes',
            pathMatch: 'full'
        },
        {
            path: 'recipes',
            component: RecipesComponent,
            children:
                [
                    {
                        path: '',
                        component: RecipeStartComponent
                    },
                    {
                        path: ':id',
                        component: RecipeDetailComponent
                    },
                ]
        },
        {
            path: 'shopping-list',
            component: ShoppingListComponent
        },
    ]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}