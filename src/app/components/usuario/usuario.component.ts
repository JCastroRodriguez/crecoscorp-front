import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PerfilService } from 'src/app/services/perfil/perfil.service';
import { SeguridadService } from 'src/app/services/seguridad/seguridad.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Alertas } from 'src/utilitarios/alertas';
import { ModalPerfilComponent } from '../modals/modal-perfil/modal-perfil.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  //DATOS DEL USUARIO
  usuario = this.seguridadService.datosUsuario.id;

  // / DEFINIR INSTANCIA DE LA CLASE ERRORFORMULARIO.
  alertas = new Alertas();
  listaUsuarios: any = [];
  displayedColumns: string[] = ['USUARIO', 'CELULAR', 'CORREO', 'PERFIL', 'ESTADO', 'ACCIONES'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private perfilService: PerfilService,
    private usuarioService: UsuarioService,
    public dialog: MatDialog,
    private seguridadService: SeguridadService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.listaUsuarios = [];
    await this.usuarioService.usuariosTodos().toPromise().then(async (respuesta: any) => {
      if (respuesta.datos != null ) {
        this.listaUsuarios = respuesta.datos;
        console.log(this.listaUsuarios)
        this.listaUsuarios = new MatTableDataSource<any>(respuesta.datos);
        this.listaUsuarios.paginator = this.paginator;
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
