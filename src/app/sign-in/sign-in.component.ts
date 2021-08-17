import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service'
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: User;
  loginUser: User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserServiceService) { 
              
      this.user = new User();
      this.loginUser = new User();
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

  loginAttempt () {
    
  }

  ngOnInit(): void {
  }

  switchPanel() {
    document.getElementById('container')?.classList.add("right-panel-active");
  }

  switchOtherPanel() {
    document.getElementById('container')?.classList.remove("right-panel-active");
  }
}
