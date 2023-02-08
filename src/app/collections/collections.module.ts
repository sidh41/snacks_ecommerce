import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollectionsPageRoutingModule } from './collections-routing.module';

import { CollectionsPage } from './collections.page';

import { componentsModule } from '../components/components.modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollectionsPageRoutingModule,
    componentsModule
  ],
  declarations: [CollectionsPage]
})
export class CollectionsPageModule {}
