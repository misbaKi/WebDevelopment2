import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BabyinfoComponent } from './babyinfo/babyinfo.component';
import { VacinfoComponent } from './vacinfo/vacinfo.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'', component:HeaderComponent},
  {path:'babyinfo' , component:BabyinfoComponent},
  {path:'vacinfo' , component:VacinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
