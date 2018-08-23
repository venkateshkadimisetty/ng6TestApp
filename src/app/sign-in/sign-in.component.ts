import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/user';
import { SignInService } from './sign-in.service';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor(
    private router: Router,
    private signInservice: SignInService,
    private translate: TranslateService
  ) {
    translate.addLangs(['en', 'fr', 'tl']);
    translate.setDefaultLang('tl');

    // let browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  model = new User('', '');
  ngOnInit() {}

  login(inputForm): void {
    this.signInservice.loginUser(this.model).subscribe(response => {
      localStorage.setItem('access-token', response['token']);
      this.router.navigate(['/dashboard']);
    });
    /*if(this.model.username == 'admin' && this.model.password == 'admin'){
      console.log("form data",inputForm);
     alert("login successfully!!")
     this.router.navigate(['/dashboard']);
    }else {
      alert("Invalid credentials");
    }*/
  }
}
