import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorprovider } from './services/AuthInterceptor';
import { AdminDashboardComponent } from './user/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import {MatTableModule} from '@angular/material/table';
import { ViewDashboardComponent } from './pages/admin/view-dashboard/view-dashboard.component';
import {MatDividerModule} from '@angular/material/divider';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ViewQuesComponent } from './pages/admin/ques/view-ques/view-ques.component';
import { AddQuesComponent } from './pages/admin/ques/add-ques/add-ques.component';
import { UpdateQuesComponent } from './pages/admin/ques/update-ques/update-ques.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NormalSidebarComponent } from './pages/user/normal-sidebar/normal-sidebar.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";
import { InstructionComponent } from './pages/user/instruction/instruction.component';
import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewDashboardComponent,
    AddCategoryComponent,
    ViewQuizComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuesComponent,
    AddQuesComponent,
    UpdateQuesComponent,
    NormalSidebarComponent,
    LoadQuizComponent,
    InstructionComponent,
    StartQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatGridListModule,
    CKEditorModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot(
      {
        showForeground:true,
      }
    ),
    MatProgressSpinnerModule,
  ],
  providers: [authInterceptorprovider],
  bootstrap: [AppComponent]
})
export class AppModule { }
