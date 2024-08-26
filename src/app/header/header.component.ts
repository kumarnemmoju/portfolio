import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private matSnackBar : MatSnackBar){}
  isMenuOpen = false;

  closeMenu() {
    this.isMenuOpen = false;
  }

  onClick(){
    this.matSnackBar.open('Downloaded successfully', 'Close', {
      duration: 3000,  // Duration in milliseconds
    });
  }
}
