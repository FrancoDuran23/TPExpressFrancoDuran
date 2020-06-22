import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  public imagesUrl;
  constructor() {

  }

  ngOnInit(): void {
    this.imagesUrl = ['/assets/img/imag1.jpg', '/assets/img/imag2.jpg', '/assets/img/imag3.jpg'];
  }

}
