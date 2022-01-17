import { NgModule } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldControl } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";

const MaterialComponents = [
  MatTabsModule,
  MatIconModule,
  // MatFormFieldControl,
  MatSelectModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}