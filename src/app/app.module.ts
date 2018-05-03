import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { ProjetosPage } from '../pages/projetos/projetos';
import { ProjetoPage } from '../pages/projeto/projeto';
import { TabsPage } from '../pages/tabs/tabs';
import { TarefasPage, Filtro } from '../pages/tarefas/tarefas';
import { TarefaPage } from '../pages/tarefa/tarefa'


import { ProjetosService } from '../providers/projetos-service';
import { TarefasService } from '../providers/tarefas-service';


@NgModule({
  declarations: [
     MyApp,
    ProjetosPage,
    ProjetoPage,
    TabsPage,
    TarefasPage,
    TarefaPage,
    Filtro
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
     MyApp,
    ProjetosPage,
    ProjetoPage,
    TabsPage,
    TarefasPage,
    TarefaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
     ProjetosService,
    TarefasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
