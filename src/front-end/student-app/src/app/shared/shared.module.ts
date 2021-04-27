import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from './ng-zorro/ng-zorro.module';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowRoleDirective } from './directives/show-role.directive';
import { ShowAuthedDirective } from './directives/show-authed.directive';

@NgModule({
  declarations: [LayoutComponent, ShowRoleDirective, ShowAuthedDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroModule,
    RouterModule
  ],
  exports:[
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroModule,
    LayoutComponent
  ]
})
export class SharedModule { }
