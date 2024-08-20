import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';
import { UsersService } from './../users.service';
import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  // userId = input.required<string>();

  // userName = '';
  userName = input.required<string>();
  message = input.required<string>();
  // private usersService = inject(UsersService);
  // private activatedRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);

  // userName = computed(
  //   () => this.UsersService.users.find((u) => u.id === this.userId())?.name
  // );

  private activatedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
    // console.log('input data' + this.message());
    // console.log(this.activatedRoute);
    // const subscription = this.activatedRoute.paramMap.subscribe({
    //   next: (paramMap) =>
    //     (this.userName =
    //       this.usersService.users.find((u) => u.id === paramMap.get('userId'))
    //         ?.name || ''),
    // });
    // this.destroyRef.onDestroy(() => subscription.unsubscribe());
    this.activatedRoute.data.subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}

export const resolvedUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userName =
    usersService.users.find(
      (u) => u.id === activatedRoute.paramMap.get('userId')
    )?.name || '';
  return userName;
};

export const resolveTitle: ResolveFn<string> = (
  activatedRoute,
  routerState
) => {
  return resolvedUserName(activatedRoute, routerState) + "'s Tasks";
};
