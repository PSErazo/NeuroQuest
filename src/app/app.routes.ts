import { Routes } from '@angular/router';
import { SequenceComponent } from './sequence/sequence.component';

export const routes: Routes = [
  {
    path: '',
    component: SequenceComponent,
  },
  {
    path: '/sequencememory',
    component: SequenceComponent,
  },
];
