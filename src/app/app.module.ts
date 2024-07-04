import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
//modulos
import { ReactiveFormsModule } from '@angular/forms';
//componentes

import { AboutComponent } from './pages/about/about.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { CardComponent } from './pages/card/card.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [    
       AddEditProductComponent ],
        
    
 imports: [ HttpClientModule, BrowserModule, ReactiveFormsModule, RouterModule, Component],
exports: [RouterModule],


})
export class AppRoutinModule{}

