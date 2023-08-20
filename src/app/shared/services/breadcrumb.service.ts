import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  // BehaviorSubject che terrà traccia dei breadcrumb
  breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);

  constructor(private router: Router) {
    this.router.events.pipe(
      // Filtra solo gli eventi di navigazione conclusi
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      const root = this.router.routerState.snapshot.root;
      const breadcrumbs = this.createBreadcrumbs(root);
      this.breadcrumbs$.next(breadcrumbs);
    });
  }

  private createBreadcrumbs(route: ActivatedRouteSnapshot, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    if (route) {
      const children: ActivatedRouteSnapshot[] = route.children;

      if (children.length === 0) {
        return breadcrumbs;
      }

      for (const child of children) {
        const routeURL: string = child.url.map(segment => segment.path).join('/');
        if (routeURL !== '') {
          url += `/${routeURL}`;
        }

        breadcrumbs.push({ label: child.data['breadcrumb'], url: url });
        return this.createBreadcrumbs(child, url, breadcrumbs);
      }
    }
    return breadcrumbs;
  }
}
