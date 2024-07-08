import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  typeSelected: string;
  constructor() { 
    this.typeSelected = 'ball-fussion';
  }
  @Input() titulo: any;

  ngOnInit(): void {

    if(this.titulo == null){
      this.titulo = "Cargando, espere por favor...";
    }
  }

}
