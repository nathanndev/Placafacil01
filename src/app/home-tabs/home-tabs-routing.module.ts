import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTabsPage } from './home-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTabsPage,
    children: [
     
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule),
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule),
      },
      {
        path: '',
        redirectTo: '/home-tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home-tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTabsPageRoutingModule {}
