import { Component, OnInit } from '@angular/core';
import { post } from '../../const/post';
import { ipost } from '../../models/post';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss']
})
export class PostcardComponent implements OnInit {

  postarray : Array<ipost> = post
  constructor() { }

  ngOnInit(): void {
  }

}
