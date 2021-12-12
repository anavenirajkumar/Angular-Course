import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxFilterComponent } from './components/checkbox-filter/checkbox-filter.component';
import { DropdownSelectComponent } from './components/dropdown-select/dropdown-select.component';
import { DynamicDropdownComponent } from './components/dynamic-dropdown/dynamic-dropdown.component';
import { DynamicRowsComponent } from './components/dynamic-rows/dynamic-rows.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';

const routes: Routes = [
  {path :'checkbox-filter', component : CheckboxFilterComponent},
  {path :'search-filter', component : SearchFilterComponent},
  {path :'dynamic-dropdown', component : DynamicDropdownComponent},
  {path :'dropdown-select', component : DropdownSelectComponent},
  {path :'dynamic-rows', component : DynamicRowsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
