import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { LeancloundService } from '../shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;

  constructor(
    private leancloundService: LeancloundService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  private onLogin(): void {
    if (!this.username || !this.password) return ;
    this.leancloundService.login({username: this.username, password: this.password}).subscribe(
      data => {
        console.log(data);
        localStorage.setItem("sessionToken", data["sessionToken"]);
        this.router.navigate(['blogs']);
      },
      error => { console.log(error) }
    )
  }

}
