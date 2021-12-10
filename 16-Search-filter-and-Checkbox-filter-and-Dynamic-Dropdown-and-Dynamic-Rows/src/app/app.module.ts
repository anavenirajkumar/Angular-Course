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
@NgModule({
  declarations: [
    AppComponent,
    CheckboxFilterComponent,
    SearchFilterPipe,
    SearchFilterComponent,
    DynamicDropdownComponent,
    DynamicRowsComponent,
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
