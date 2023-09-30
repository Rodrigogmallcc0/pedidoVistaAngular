import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductoModel } from 'src/app/model/producto';
import { PedidoServiceService } from 'src/app/services/producto/pedido-service.service';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.sass']
})
export class PedidoComponent implements OnInit{

  listProducto: ProductoModel[]=[];
  formProducto: FormGroup = new FormGroup({});
  isUpdate: Boolean=false;

  constructor (private productoService: PedidoServiceService){}

  ngOnInit(): void {
    this.list();
    this.formProducto = new FormGroup({
      productoId: new FormControl(),
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
      precio: new FormControl(''),
      stockP: new FormControl('')
    });
  }
  list(){
    return this.productoService.getAllProducto().subscribe(data=>{
      this.listProducto = data.body;
    })
  }

  selectProducto(item: any){
    this.isUpdate=true;
    this.formProducto.controls['cantidad'].setValue(item.stockP)
  }

  nuevoProducto(){
    this.isUpdate=false;
    this.formProducto.reset();
  }
  save() {
    //this.formProducto.controls['status'].setValue('1');
    this.productoService.saveProducto(this.formProducto.value)
    .subscribe(resp=>{
      if(resp){
        this.list();
        this.formProducto.reset();
        alert("Libro guardado correctamente");
      }
    })
  }

  updateStock(){
    this.productoService.updateStock(this.formProducto.value)
    .subscribe(resp=>{
      if(resp){
        this.list();
        this.formProducto.reset();
        alert("Stock Actualizador")
      }
    })
  }
  

  
}
