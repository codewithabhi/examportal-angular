import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent} from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './user/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { adminGuard } from './services/admin.guard';
import { userGuard } from './services/user.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewDashboardComponent } from './pages/admin/view-dashboard/view-dashboard.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuesComponent } from './pages/admin/ques/view-ques/view-ques.component';
import { AddQuesComponent } from './pages/admin/ques/add-ques/add-ques.component';
import { UpdateQuesComponent } from './pages/admin/ques/update-ques/update-ques.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionComponent } from './pages/user/instruction/instruction.component';
import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path:'start-quiz/:qId',
    component:StartQuizComponent,
    canActivate:[userGuard],
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path:'admin',
    component:AdminDashboardComponent,
    canActivate:[adminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent
        },
      {
      path:'profile',
      component:ProfileComponent
      },
      {
        path:'category',
        component:ViewDashboardComponent
      },
      {
        path:'add-category',
        component:AddCategoryComponent
      },
      {
        path:'quiz',
        component:ViewQuizComponent
      },
      {
        path:'add-quiz',
        component:AddQuizComponent
      },
      {
        path:'quiz/:qId',
        component:UpdateQuizComponent
      },
      {
        path:'view-ques/:qId/:title',
        component:ViewQuesComponent
      },
      {
        path:'add-ques/:qId/:qtitle',
        component:AddQuesComponent
      },
      {
        path:'update-ques/:quesId',
        component:UpdateQuesComponent
      },
    ]
  },
  {
    path:'user',
    component:UserDashboardComponent,
    canActivate:[userGuard],
    children:[
      {
        path:'load-quiz/:qid',
        component:LoadQuizComponent,
      },
      {
        path:'instruction/:qid',
        component:InstructionComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
