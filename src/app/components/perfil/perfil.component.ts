import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PerfilService } from 'src/app/services/perfil/perfil.service';
import { SeguridadService } from 'src/app/services/seguridad/seguridad.service';
import { Alertas } from 'src/utilitarios/alertas';
import { ModalPerfilComponent } from '../modals/modal-perfil/modal-perfil.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  //DATOS DEL USUARIO
  usuario = this.seguridadService.datosUsuario.id;

  // / DEFINIR INSTANCIA DE LA CLASE ERRORFORMULARIO.
  alertas = new Alertas();
  listaPerfiles : any = [];
  displayedColumns: string[] = ['PERFIL', 'DESCRIPCION', 'ESTADO', 'ACCIONES'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  constructor(
    private perfilService: PerfilService,
    public dialog: MatDialog,
    private seguridadService: SeguridadService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.listaPerfiles = [];
    await this.perfilService.perfilesTodos().toPromise().then(async (respuesta: any) => {
      if (respuesta.datos != null ) {
        this.listaPerfiles = respuesta.datos;
        console.log(this.listaPerfiles)
        this.listaPerfiles = new MatTableDataSource<any>(respuesta.datos);
        this.listaPerfiles.paginator = this.paginator;
      } else {
        this.alertas.ToastExito('No se encontraron registros');
      }
      //await this.SpinnerService.hide();
    }).catch(async (error: Error) => {
      //await this.SpinnerService.hide();
    }
    );
  }

  nuevo() {
    const dialogRef = this.dialog.open(ModalPerfilComponent, {
      width: '500px',
      data: {
        titulo: "Nuevo Perfil",
        datos: { estado: 2 },
        id: 0
      }
    });

    dialogRef.afterClosed().subscribe(async result => {
      if (result === 'creado') {
        this.alertas.ToastExito('Perfil creado éxitosamente!');
        await this.ngOnInit();
      }
    });
  }

  editar(data: any) {
    const dialogRef = this.dialog.open(ModalPerfilComponent, {
      width: '500px',
      data: {
        titulo: "Editar Perfil",
        datos: data,
        id: data.id
      }
    });

    dialogRef.afterClosed().subscribe(async result => {
      if (result === 'actualizado') {
        this.alertas.ToastExito('Perfil actualizado éxitosamente!');
        await this.ngOnInit();
      }
    });
  }
  

}
