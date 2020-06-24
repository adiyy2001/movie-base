import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

const materialModule = [
  MatListModule, MatToolbarModule, MatButtonModule,
  MatIconModule, MatNativeDateModule, MatSidenavModule];
@NgModule({
  imports: [...materialModule],
  exports: [...materialModule]
})
export class MaterialModule {

}
