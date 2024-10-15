import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { BindingComponent } from './components/demos/binding/binding.component';
import { PipeComponent } from './components/demos/pipe/pipe.component';
import { DirectiveComponent } from './components/demos/directive/directive.component';
import { ListeProduitsComponent } from './components/exos/liste-produits/liste-produits.component';
import { ParentComponent } from './components/demos/inputOutput/parent/parent.component';
import { ShoppingComponent } from './components/exos/shoppingList/shopping/shopping.component';
import { LivreServiceComponent } from './components/demos/livre-service/livre-service.component';
import { ShoppingListServiceComponent } from './components/exos/shopping-list-service/shopping-list-service.component';
import { FormulaireComponent } from './components/demos/formulaire/formulaire.component';
import { RoutingComponent } from './components/demos/routing/routing/routing.component';
import { ProfilUserComponent } from './components/demos/routing/profil-user/profil-user.component';
import { ListComponent } from './components/exos/fan-serie/list/list.component';
import { DetailsComponent } from './components/exos/fan-serie/details/details.component';
import { AjoutComponent } from './components/exos/shoppingList/ajout/ajout.component';
import { UpdateComponent } from './components/exos/fan-serie/update/update.component';
import { AjoutFanComponent } from './components/exos/fan-serie/ajout-fan/ajout-fan.component';
import { StockageSessionComponent } from './components/demos/stockage-session/stockage-session.component';
import { BehaviourSubjectComponent } from './components/demos/behaviour-subject/behaviour-subject.component';
import { ConsoApiComponent } from './components/demos/conso-api/conso-api.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'demos', children: [
        { path: 'binding', component: BindingComponent},
        { path: 'pipe', component: PipeComponent},
        { path: 'directive', component: DirectiveComponent },
        { path: 'inputOutput', component:  ParentComponent},
        { path: 'service', component:  LivreServiceComponent},
        { path: 'formulaire', component:  FormulaireComponent},
        { path: 'routing', component:  RoutingComponent},
        { path: 'profil/:id', component:  ProfilUserComponent},
        { path: 'stockage-session', component:  StockageSessionComponent},
        { path: 'behaviour-subject', component:  BehaviourSubjectComponent},
        { path: 'conso-api', component:  ConsoApiComponent}

    ]},
    { path: 'exos', children: [
        { path: 'directive', component: ListeProduitsComponent },
        { path: 'inputOutput', component: ShoppingComponent },
        { path: 'service', component: ShoppingListServiceComponent },

        { path: 'liste-fan', component:  ListComponent},
        { path: 'details-fan/:id', component:  DetailsComponent},
        { path: 'ajout-fan', component:  AjoutFanComponent},
        { path: 'update-fan/:id', component:  UpdateComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
