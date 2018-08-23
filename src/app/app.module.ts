import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { TokenInterceptor } from "./shared/interceptors/token-interceptors";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { SignInService } from "./sign-in/sign-in.service";
import { JwtModule } from "@auth0/angular-jwt";
import { TranslateModule } from "ng2-translate";

export function tokenGetter() {
  return localStorage.getItem("access-token");
}
@NgModule({
  declarations: [AppComponent, SignInComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:3001"],
        blacklistedRoutes: ["localhost:3001/auth/"]
      }
    }),
    TranslateModule.forRoot()
  ],
  providers: [
    SignInService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
