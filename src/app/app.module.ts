import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListBukuComponent } from './components/list-buku/list-buku.component';
import { BukuService } from './services/buku.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchComponent } from './components/search/search.component';
import { DetilBukuComponent } from './components/detil-buku/detil-buku.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KategoriComponent } from './components/kategori/kategori.component';

const routes: Routes = [
  {path:'', redirectTo: '/tokobuku', pathMatch: 'full'},
  {path:'tokobuku', component: ListBukuComponent},
  {path:'tokobuku/all', component: ListBukuComponent},
  {path:'tokobuku/:id', component: DetilBukuComponent},
  {path:'tokobuku/:id/:kategori', component: DetilBukuComponent},
  {path:'judul/:judul', component: ListBukuComponent},
  {path:'kategori/:kategori', component: ListBukuComponent},
  {path:'cart-details', component: CartDetailsComponent},
  {path:'checkout', component: CheckoutComponent},
  {path:'**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListBukuComponent,
    PageNotFoundComponent,
    SearchComponent,
    DetilBukuComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    KategoriComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BukuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
