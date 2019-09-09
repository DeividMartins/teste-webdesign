import { Component, OnInit, Input } from '@angular/core';
import { Informatica } from './informatica.model';

@Component({
  selector: 'mt-informatica',
  templateUrl: './informatica.component.html'
})
export class InformaticaComponent implements OnInit {

  @Input() informatica: Informatica
  constructor() { }

  ngOnInit() {
  }

}
