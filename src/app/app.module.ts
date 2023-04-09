import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from "@angular/material/menu";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvancedProfileComponent } from './components/advanced-profile/advanced-profile.component';
import { CreateProfileModalComponent } from './components/create-profile-modal/create-profile-modal.component';
import { DetailsPanelComponent } from './components/details-panel/details-panel.component';
import { FoodItemPanelComponent } from './components/food-item-panel/food-item-panel.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { NameProfileComponent } from './components/name-profile/name-profile.component';
import { TaxDiscountPanelComponent } from './components/tax-discount-panel/tax-discount-panel.component';
import { DetailModalComponent } from './components/detail-modal/detail-modal.component';
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from '@angular/material/sort';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { FoodPalettesBoxComponent } from './components/food-palettes-box/food-palettes-box.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    FoodItemPanelComponent,
    NameProfileComponent,
    CreateProfileModalComponent,
    AdvancedProfileComponent,
    TaxDiscountPanelComponent,
    DetailsPanelComponent,
    DetailModalComponent,
    ProfileListComponent,
    FoodPalettesBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    DragDropModule,
    MatMenuModule,
    NoopAnimationsModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
