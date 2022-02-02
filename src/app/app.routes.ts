import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
  { path : 'directory/:ninja', component: DirectoryComponent },
  { path : '', component: HomeComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
