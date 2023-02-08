import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from '@ionic/angular';
import { CartFooterComponent } from "./cart-footer/cart-footer.component";

@NgModule ({
    declarations: [CartFooterComponent],
    imports: [IonicModule, RouterModule],
    exports: [CartFooterComponent]
})
export class componentsModule{}