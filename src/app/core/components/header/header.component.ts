import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TransferDataService } from '../../services/transfer-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  shouldShow = false;

  constructor(
    private transferDataService: TransferDataService,
    private authService: AuthService,
    private router: Router,
  ) {}

  onToggleSortBlock(): void {
    this.shouldShow = !this.shouldShow;
    this.transferDataService.shareData(this.shouldShow);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
