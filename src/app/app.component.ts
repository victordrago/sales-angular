import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet],

  
})


export class AppComponent implements OnInit {
  private auth = inject(AuthService);

  ngOnInit() {
    const token = this.auth.token();
    if (token) {
      this.auth.me().subscribe({
        next: (r) => this.auth.setSession(token, r.data),
        error: () => this.auth.clearSession()
      });
    }
  }
}









