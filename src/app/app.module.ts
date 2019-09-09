import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InformaticasComponent } from './informaticas/informaticas.component';
import { InformaticaComponent } from './informaticas/informatica/informatica.component';
import { InformaticasService } from './informaticas/informaticas.service';
import { InformaticaDetailComponent } from './informatica-detail/informatica-detail.component';
import { MenuComponent } from './informatica-detail/menu/menu.component';
import { ShoppingCartComponent } from './informatica-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './informatica-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './informatica-detail/reviews/reviews.component';
import { ShoppingCartService } from './informatica-detail/shopping-cart/shopping-cart.service';
import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OderItemsComponent } from './order/oder-items/oder-items.component';

import { OrderService} from './order/order.service';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { CadastroComponent } from './cadastro/cadastro.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    InformaticasComponent,
    InformaticaComponent,
    InformaticaDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OderItemsComponent,
    DeliveryCostsComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [InformaticasService, ShoppingCartService, { provide: LOCALE_ID, useValue: 'pt-BR' }, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
