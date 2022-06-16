import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildrenComponent } from './Categories/children/children.component';
import { HorrorComponent } from './Categories/horror/horror.component';
import { LoveComponent } from './Categories/love/love.component';
import { PagenotfoundComponent } from './Categories/pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { ListbookComponent } from './listbook/listbook.component';

const routes: Routes = [{path : "", component : HomeComponent},
                        {path : "home", component : HomeComponent},
                        {path: "categories", component : ListbookComponent},
                        {path:"horror", component: HorrorComponent},
                        {path:"love", component: LoveComponent},
                        {path:"children", component: ChildrenComponent},
                        {path:"**", component: PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
