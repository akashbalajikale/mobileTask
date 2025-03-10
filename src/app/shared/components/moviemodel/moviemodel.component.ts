import { Component, OnInit } from '@angular/core';
import { imovies } from '../../models/movies';
import { movieArray } from '../../const/movie';

@Component({
  selector: 'app-moviemodel',
  templateUrl: './moviemodel.component.html',
  styleUrls: ['./moviemodel.component.scss']
})
export class MoviemodelComponent implements OnInit {
 
  moviesArray : Array<imovies> =movieArray
  constructor() { }

  ngOnInit(): void {
  }

}
