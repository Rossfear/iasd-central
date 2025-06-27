import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "./home/home.component";
import { ROUTE } from "../core/constants/path-routes";

export const layoutRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
              path: ROUTE.inicio,
              component: HomeComponent
            },
            {
              path: '**',
              redirectTo: ROUTE.inicio
            }
        ]
    },
    {
      path: '**',
      redirectTo: ROUTE.inicio
    }
];
