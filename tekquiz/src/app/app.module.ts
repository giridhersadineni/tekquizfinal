import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { QuizService } from './services/quiz.service';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ManagequizComponent } from './managequiz/managequiz.component';
import { ManagequestionsComponent } from './managequestions/managequestions.component';
import { FinishQuizComponent } from './finish-quiz/finish-quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { ParticipantComponent } from './participant/participant.component';
import { TopicFormComponent } from './topic-form/topic-form.component';

import { TopicService } from './services/topic.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminQuestionsComponent } from './admin-questions/admin-questions.component';
import { AdminTopicsComponent } from './admin-topics/admin-topics.component';
import { AdminQuizComponent } from './admin-quiz/admin-quiz.component';
import { QuestionService } from './services/question.service';
import { ConfigService } from './services/config.service';
import { AddQuestionFormComponent } from './add-question-form/add-question-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CreateQuizFormComponent } from './create-quiz-form/create-quiz-form.component';
import { ManageparticipantsComponent } from './manageparticipants/manageparticipants.component';
import { AddquizComponent } from './addquiz/addquiz.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent,
    LoginComponent,
    QuestionComponent,
    AdminComponent,
    AdminnavbarComponent,
    UserdashboardComponent,
    ManagequizComponent,
    ManagequestionsComponent,
    FinishQuizComponent,
    ParticipantComponent,
    TopicFormComponent,
    AdminDashboardComponent,
    AdminQuestionsComponent,
    AdminTopicsComponent,
    AdminQuizComponent,
    AddQuestionFormComponent,
    CreateQuizFormComponent,
    ManageparticipantsComponent,
    AddquizComponent,
    ManageUsersComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule

  ],
  providers: [
    QuizService,
    TopicService,
    QuestionService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
