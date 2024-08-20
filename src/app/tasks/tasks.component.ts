import { Component, inject, input } from '@angular/core';

import { ResolveFn, RouterLink } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  // order = input<'asc' | 'desc'>();
  // order?: 'asc' | 'desc';
  // userTasks: Task[] = [];

  // userId = input.required<string>();
  // order = signal<'asc' | 'desc'>('desc');
  // private tasksService = inject(TasksService);
  // userTasks = computed(() =>
  //   this.tasksService
  //     .allTasks()
  //     .filter((task) => task.userId === this.userId())
  //     .sort((a, b) => {
  //       if (this.order() === 'desc') {
  //         return a.id > b.id ? -1 : 1;
  //       } else {
  //         return a.id > b.id ? 1 : -1;
  //       }
  //     })
  // );
  // private activateRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);
  //ngOnInit(): void {
  //   const subscription = this.activateRoute.queryParams.subscribe({
  //     // next: (params) => (this.order = params['order']),
  //     next: (params) => this.order.set(params['order']),
  //   });
  //   this.destroyRef.onDestroy(() => subscription.unsubscribe());
  // }
  userTasks = input.required<Task[]>();
  userId = input.required<string>();
  order = input<'asc' | 'desc' | undefined>();
}
