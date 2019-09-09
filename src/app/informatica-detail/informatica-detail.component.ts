import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { InformaticasService} from '../informaticas/informaticas.service';
import { Informatica} from '../informaticas/informatica/informatica.model';

@Component({
  selector: 'mt-informatica-detail',
  templateUrl: './informatica-detail.component.html'
})
export class InformaticaDetailComponent implements OnInit {

  informatica: Informatica
  constructor(private informaticasService: InformaticasService,
               private route: ActivatedRoute) { }

  ngOnInit() {
    this.informaticasService.informaticaById(this.route.snapshot.params['id'])
    .subscribe(informatica => this.informatica = informatica )
  }

}
