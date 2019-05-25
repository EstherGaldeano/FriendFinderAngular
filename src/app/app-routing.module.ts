import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsComponent }      from './components/animals/animals.component';
import { AnimalDetailComponent }      from './components/animal-detail/animal-detail.component';


const routes: Routes = [
  { path: 'animals', component: AnimalsComponent },
  { path: 'fichaAnimal/:id', component: AnimalDetailComponent },//pasamos el id del animal a la ruta
  { path: '', component: AnimalsComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
