import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl, NgModel, ReactiveFormsModule   } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { InventarioService } from '../inventario.service';
import { environment } from '../../../environments/environment';
import { Inventario } from '../inventario';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  cargando:boolean = false;
  // # SECCION: Resultados de búsqueda
  ultimoTerminoBuscado = "";
  //terminosBusqueda = new Subject<string>();
  resultadosBusqueda: any[] = [];
  busquedaActivada:boolean = false;
  paginaActualBusqueda = 1;
  resultadosPorPaginaBusqueda = 25;
  totalBusqueda = 0;
  paginasTotalesBusqueda = 0;
  indicePaginasBusqueda:number[] = [];
  paginaActual = 1;
  resultadosPorPagina = 25;
  total = 0;
  paginasTotales = 0;
  indicePaginas:number[] = [];
  ultimaPeticion:any;

  //Inventario
  lista_inventario:any = [];

  constructor(
    private title: Title,
    private fb: FormBuilder,
    private inventarioService: InventarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.title.setTitle("Inventario / Lista");
    this.listar(1);
  }

  listar(pagina:number): void {
    this.paginaActual = pagina;
    this.cargando = true;
    this.lista_inventario = [];
    this.inventarioService.lista(pagina,this.resultadosPorPagina).subscribe(
        resultado => {
          this.lista_inventario = resultado as Inventario;
          this.cargando = false;          
        },
        error => {
          this.cargando = false;
          //this.mensajeError.mostrar = true;
          this.ultimaPeticion = this.listar;
          try {
            let e = error.json();
            if (error.status == 401 ){
              //this.mensajeError.texto = "No tiene permiso para hacer esta operación.";
            }
          } catch(e){
            console.log("No se puede interpretar el error");
            
            if (error.status == 500 ){
              //this.mensajeError.texto = "500 (Error interno del servidor)";
            } else {
              //this.mensajeError.texto = "No se puede interpretar el error. Por favor contacte con soporte técnico si esto vuelve a ocurrir.";
            }            
          }

        }
      );
    }

}
