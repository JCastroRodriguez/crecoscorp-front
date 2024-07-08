import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.refreshScreen();
  }

  refreshScreen(): void {
    // Marca la vista para chequeo de cambios
    this.cdr.detectChanges();
  }

}
