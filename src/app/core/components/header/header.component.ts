import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TransferDataService } from '../../services/transfer-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  shouldShow = false;

  isLogin = false;

  subscription: Subscription | undefined;

  constructor(
    private transferDataService: TransferDataService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.subscription = this.authService.getLoginState().subscribe((isLogin) => {
      this.isLogin = isLogin;
    });
  }

  onToggleSortBlock(): void {
    this.shouldShow = !this.shouldShow;
    this.transferDataService.shareData(this.shouldShow);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }

  goToAdmin(): void {
    this.router.navigateByUrl('/admin');
  }

  goToYoutube(): void {
    this.router.navigateByUrl('/youtube');
  }

  goToCustomVideos(): void {
    this.router.navigateByUrl('/custom-video');
  }

  login(): void {
    this.router.navigateByUrl('/auth/login');
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
