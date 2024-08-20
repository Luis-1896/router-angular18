import { routes as userRoutes } from './users/users.routes';
import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolvedUserName,
  resolveTitle,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { inject } from '@angular/core';

const dummyCanMatch: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if (shouldGetAccess < 1) {
    return true;
  }
  return new RedirectCommand(router.parseUrl('/unauthorized'));
};

export const routes: Routes = [
  {
    path: '', //<your-domain>/
    component: NoTaskComponent,
    title: 'No task selected',
  },
  {
    path: 'users/:userId', //<your-domain>/users/<uid>
    component: UserTasksComponent,
    children: userRoutes,
    canMatch: [dummyCanMatch],
    data: {
      message: 'Hi',
    },
    resolve: {
      userName: resolvedUserName,
    },
    title: resolveTitle,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
  // {
  //   path: 'tasks', // <your-domain>/tasks
  //   component: TasksComponent,
  // },
];
