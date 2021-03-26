import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzButtonModule,
    NzCardModule,
    NzGridModule,
    NzLayoutModule,
    NzInputModule,
    NzFormModule,
    NzCheckboxModule,
    NzIconModule,
  ],
  exports:[
    NzButtonModule,
    NzCardModule,
    NzGridModule,
    NzLayoutModule,
    NzInputModule,
    NzFormModule,
    NzCheckboxModule,
    NzIconModule
  ]
})
export class NgZorroModule { }
