import { Component, OnInit } from '@angular/core';
import { Informatica } from './informatica/informatica.model';
import { InformaticasService } from './informaticas.service';
@Component({
  selector: 'mt-informaticas',
  templateUrl: './informaticas.component.html'
})
export class InformaticasComponent implements OnInit {

  informaticas: Informatica[]

  constructor(private informaticasService: InformaticasService) { }

  ngOnInit() {
    this.informaticasService.informaticas()
    .subscribe(informaticas => this.informaticas = informaticas)
  }

}
