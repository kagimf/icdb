import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { BrandComponent } from './brand/brand.component';
import { ModelComponent } from './model/model.component';
import { ModificationComponent } from './modification/modification.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { BrandFilterPipe } from './brand/brand-filter.pipe';
import { ModelFilterPipe } from './model/model-filter.pipe';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ModificationAddComponent } from './modification-add/modification-add.component';
import { ModificationEditComponent } from './modification-edit/modification-edit.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { BrandAddComponent } from './brand-add/brand-add.component';
import { ModelAddComponent } from './model-add/model-add.component';
import { ModificationFilterPipe } from './modification/modification-filter.pipe';
import { ModificationViewComponent } from './modification-view/modification-view.component';
import { ModelEditComponent } from './model-edit/model-edit.component';
import { PredecessorSuccessorAddComponent } from './predecessor-successor-add/predecessor-successor-add.component';
import { PredecessorSuccessorComponent } from './predecessor-successor/predecessor-successor.component';


const appRoutes:Routes=[
  {
    path:"",
    redirectTo:"model",
    pathMatch:"full"
  },
  {
    path:"model",
    component:ModelComponent
  },
  {
    path:"model/:brandId",
    component:ModelComponent
  },
  {
    path:"modification/add",
    component:ModificationAddComponent
  },
  {
    path:"modification/add/company/add",
    component:CompanyAddComponent
  },
  {
    path:"modification/add/brand/add",
    component:BrandAddComponent
  },
  {
    path:"modification/add/model/add",
    component:ModelAddComponent
  },
  {
    path:"model/modification/:modelId",
    component:ModificationComponent
  },
  {
    path:"model/modification/view/:modificationId",
    component:ModificationViewComponent
  },
  {
    path:"modification/edit/:modificationId",
    component:ModificationEditComponent
  },
  {
    path:"model/edit/:modelId",
    component:ModelEditComponent
  },
  {
    path:"predecessor-successor/add",
    component:PredecessorSuccessorAddComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    BrandComponent,
    ModelComponent,
    ModificationComponent,
    NotFoundComponent,
    BrandFilterPipe,
    ModelFilterPipe,
    ModificationAddComponent,
    ModificationEditComponent,
    CompanyAddComponent,
    BrandAddComponent,
    ModelAddComponent,
    ModificationFilterPipe,
    ModificationViewComponent,
    ModelEditComponent,
    PredecessorSuccessorAddComponent,
    PredecessorSuccessorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide:"apiUrl",useValue:"http://localhost:8080"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
