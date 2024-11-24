import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'home-tabs', // Nova rota para a página Home
    loadChildren: () => import('./home-tabs/home-tabs.module').then(m => m.HomeTabsPageModule),
  },
  {
    path: '', // Rota inicial padrão
    redirectTo: 'home-tabs',
    pathMatch: 'full'
  },
  {
    path: '**', // Rota coringa para URLs inválidas
    redirectTo: 'login'
  },
  {
    path: 'home-tabs',
    loadChildren: () => import('./home-tabs/home-tabs.module').then( m => m.HomeTabsPageModule)
  },
  
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }