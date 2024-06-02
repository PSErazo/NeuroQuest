import { Routes } from '@angular/router';
import { SequenceComponent } from './components/sequence/sequence.component';
import { TypingComponent } from './components/typing/typing.component';
import { AimTrainerComponent } from './components/aim-trainer/aim-trainer.component';
import { NumberMemoryComponent } from './components/number-memory/number-memory.component';
import { ReactionTimeComponent } from './components/reaction-time/reaction-time.component';
import { VisualMemoryComponent } from './components/visual-memory/visual-memory.component';
import { gameRoutes } from './pages/games/games.routes';
import { LoginComponent } from './pages/login/login.component';
import { GamesComponent } from './pages/games/games.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
    
  },
  {
    path: 'game',
    component: GamesComponent,
    children: gameRoutes,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'singup',
    component: SignUpComponent,
  },
];
