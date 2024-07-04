import { Routes } from '@angular/router';
import { AimTrainerComponent } from './components/aim-trainer/aim-trainer.component';
import { NumberMemoryComponent } from './components/number-memory/number-memory.component';
import { ReactionTimeComponent } from './components/reaction-time/reaction-time.component';
import { SequenceComponent } from './components/sequence/sequence.component';
import { TypingComponent } from './components/typing/typing.component';
import { VisualMemoryComponent } from './components/visual-memory/visual-memory.component';
import GamesComponent from './pages/games/games.component';
import LoginComponent from './pages/login/login.component';
import SignUpComponent from './pages/sign-up/sign-up.component';

export const routes: Routes = [

  {
    path: 'game',
    component: GamesComponent,
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
    component: LoginComponent,
  },
  {
    path: 'singup',
    component: SignUpComponent
  },
  {
    path: '',
    redirectTo: '/game',
    pathMatch: 'full'
  },
];
