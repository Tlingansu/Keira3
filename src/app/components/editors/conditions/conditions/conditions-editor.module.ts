import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { QueryOutputModule } from '../../shared/query-output/query-output.module';
import { ConditionsComponent } from './conditions.component';

@NgModule({
  declarations: [
    ConditionsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    QueryOutputModule,
    TooltipModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  exports: [
    ConditionsComponent,
  ],
})
export class ConditionsEditorModule {}
