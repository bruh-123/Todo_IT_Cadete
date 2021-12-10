import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatMenuModule, MatTabsModule],
  exports: [MatToolbarModule, MatMenuModule, MatTabsModule],
})
export class MaterialUserModule {}
