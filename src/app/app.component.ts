import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthService } from './core/auth.service';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { DialogComponent } from './dialog/dialog.component';

import { User } from './core/user.model';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	links = [
		{
			icon: 'home',
			path: '',
			label: 'Strona glowna'
		},

		{
			icon: 'list',
			path: '/post/list',
			label: 'Ogloszenia'
		},
		{
			icon: 'add',
			path: '/post/new',
			label: 'Dodaj ogloszenie'
		}
	];

	isDarkTheme = true;
	currentUser: Observable<User>;

	constructor(
		private auth: AuthService,
		private iconRegistry: MatIconRegistry,
		private sanitizer: DomSanitizer,
		private dialog: MatDialog
	) {
		const avatarsSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');
		this.iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
		this.currentUser = this.auth.currentUser();
	}

	ngOnInit(): void {
		this.auth.verifyAuth();
	}

	signout() {
		this.auth.signout();
	}
}
