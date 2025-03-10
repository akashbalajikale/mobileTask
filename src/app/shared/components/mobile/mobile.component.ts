import { Component, OnInit } from '@angular/core';
import { imobile } from '../../models/mobile';
import { mobileProducts } from '../../const/mobile';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {
 mobilearray : Array<imobile> = mobileProducts;
  constructor() { }

  ngOnInit(): void {
  }

}
