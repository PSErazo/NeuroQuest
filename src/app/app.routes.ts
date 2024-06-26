import { Routes } from '@angular/router';
import { AimTrainerComponent } from './components/aim-trainer/aim-trainer.component';
import { NumberMemoryComponent } from './components/number-memory/number-memory.component';
import { ReactionTimeComponent } from './components/reaction-time/reaction-time.component';
import { SequenceComponent } from './components/sequence/sequence.component';
import { TypingComponent } from './components/typing/typing.component';
import { VisualMemoryComponent } from './components/visual-memory/visual-memory.component';

export const routes: Routes = [

  {
    path: 'game',
    loadComponent: () => import('./pages/games/games.component'),
    children:[
        {
          path: 'sequencememory',
          component: SequenceComponent,
        },
        {
          path: 'typing',
          component: TypingComponent,
        },
        {
          path: 'aimtrainer',
          component: AimTrainerComponent,
        },
        {
          path: 'numbermemory',
          component: NumberMemoryComponent,
        },
        {
          path: 'reactiontime',
          component: ReactionTimeComponent,
        },
        {
          path: 'visualmemory',
          component: VisualMemoryComponent,
        },
        {
          path: '',
          redirectTo:'sequencememory',
          pathMatch: 'full'
        },
      ],
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component')
  },
  {
    path: 'singup',
    loadComponent: () => import('./pages/sign-up/sign-up.component')
  },
  {
    path: '',
    redirectTo: '/game',
    pathMatch: 'full'
  },
];
