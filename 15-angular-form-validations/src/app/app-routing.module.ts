import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormBuilderComponent } from '././reactive-form-builder/reactive-form-builder.component';

const routes: Routes = [
  {path :'reactive-form-builder', component : ReactiveFormBuilderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
