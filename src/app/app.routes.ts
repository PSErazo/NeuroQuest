import { Routes } from '@angular/router';
import { SequenceComponent } from './components/sequence/sequence.component';
import { TypingComponent } from './components/typing/typing.component';
import { AimTrainerComponent } from './components/aim-trainer/aim-trainer.component';
import { NumberMemoryComponent } from './components/number-memory/number-memory.component';
import { ReactionTimeComponent } from './components/reaction-time/reaction-time.component';

export const routes: Routes = [
  {
    path: '',
    component: SequenceComponent,
  },
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
];
