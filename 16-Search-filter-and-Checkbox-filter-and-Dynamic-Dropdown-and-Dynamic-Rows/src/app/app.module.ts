import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxFilterComponent } from './components/checkbox-filter/checkbox-filter.component';
import { SearchFilterPipe } from './search-pipe/search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicDropdownComponent } from './components/dynamic-dropdown/dynamic-dropdown.component';
import { DynamicRowsComponent } from './components/dynamic-rows/dynamic-rows.component';
import { DropdownSelectComponent } from './components/dropdown-select/dropdown-select.component';
import { ReactiveFormBuilderComponent } from './components/reactive-form-builder/reactive-form-builder.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { CheckboxFilterTwoComponent } from './components/checkbox-filter-two/checkbox-filter-two.component';
@NgModule({
  declarations: [
    AppComponent,
    CheckboxFilterComponent,
    SearchFilterPipe,
    SearchFilterComponent,
    DynamicDropdownComponent,
    DynamicRowsComponent,
    DropdownSelectComponent,
    ReactiveFormBuilderComponent,
    ReactiveFormsComponent,
    CheckboxFilterTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
