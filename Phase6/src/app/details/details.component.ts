import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnClick() {
    this.router.navigateByUrl('/payment');
  };

}
