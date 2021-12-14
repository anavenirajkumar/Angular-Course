import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxFilterTwoComponent } from './components/checkbox-filter-two/checkbox-filter-two.component';
import { CheckboxFilterComponent } from './components/checkbox-filter/checkbox-filter.component';
import { DropdownSelectComponent } from './components/dropdown-select/dropdown-select.component';
import { DynamicDropdownComponent } from './components/dynamic-dropdown/dynamic-dropdown.component';
import { DynamicRowsComponent } from './components/dynamic-rows/dynamic-rows.component';
import { ReactiveFormBuilderComponent } from './components/reactive-form-builder/reactive-form-builder.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';

const routes: Routes = [
  {path :'checkbox-filter', component : CheckboxFilterComponent},
  {path :'checkbox-filter-two', component : CheckboxFilterTwoComponent},
  {path :'search-filter', component : SearchFilterComponent},
  {path :'dynamic-dropdown', component : DynamicDropdownComponent},
  {path :'dropdown-select', component : DropdownSelectComponent},
  {path :'dynamic-rows', component : DynamicRowsComponent},
  {path :'reactive-forms', component : ReactiveFormsComponent},
  {path :'reactive-form-builder', component : ReactiveFormBuilderComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
