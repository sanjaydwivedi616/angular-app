import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { AuthGuard } from "./auth/auth.guard";
import { AddItemsComponent } from './posts/add-items/add-items.component';
import { ShoppingListComponent } from './posts/shopping/shopping-list.component';

const routes: Routes = [

  { path: "", component: LoginComponent },
  { path: "postlist", component: PostListComponent, canActivate: [AuthGuard] },
  { path: "create", component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: "edit/:postId", component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: "additem", component: AddItemsComponent, canActivate: [AuthGuard] },
  { path: "shoplist", component: ShoppingListComponent, canActivate: [AuthGuard] },
  { path: "signup", component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
