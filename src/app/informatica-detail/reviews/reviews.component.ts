import { Component, OnInit } from '@angular/core';
import {InformaticasService} from '../../informaticas/informaticas.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private informaticasService: InformaticasService,
            private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.reviews= this.informaticasService
    .reviewsOfInformatica(this.route.parent.snapshot.params['id'])
  }

}
