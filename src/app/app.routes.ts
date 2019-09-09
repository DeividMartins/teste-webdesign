import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformaticasComponent } from './informaticas/informaticas.component';
import { AboutComponent } from './about/about.component';
import { InformaticaDetailComponent } from './informatica-detail/informatica-detail.component';
import { MenuComponent } from './informatica-detail/menu/menu.component';
import { ReviewsComponent } from './informatica-detail/reviews/reviews.component';
import { OrderComponent } from './order/order.component'
import { CadastroComponent } from './cadastro/cadastro.component';
export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'informaticas', component: InformaticasComponent },
    {
        path: 'informaticas/:id', component: InformaticaDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },
    { path: 'order', component: OrderComponent },
    { path: 'about', component: AboutComponent },
    { path: 'cadastro', component: CadastroComponent}
];
