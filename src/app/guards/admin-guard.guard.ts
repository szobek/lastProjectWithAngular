import { CanActivateFn, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  return inject(DataService).$config.value["user_id"] === 7  ? true: inject(Router).createUrlTree(['/home']);
};
