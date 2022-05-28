import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
declare var $: any;


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:any='';
  buscar:string=''; 
  userUpdate:any=''; 
  p: number = 1;
  cantpag:number = 5;
   

  constructor(private api:AppService, private FormBuilder:FormBuilder) {
    this.inicializarforom();
   }

   formUser!: FormGroup;
  ngOnInit(): void {
    this. obtenerUser();
  }
  //listar
  obtenerUser(){
    this.api.getinfo().subscribe((data:any)=>{
      this.usuarios = data
    })
  }
  clear(){
    console.log("test")
    this.formUser.reset();
  }
//crear y editar
  crearUser(bool:boolean){
    
    //editar
    let formUser = this.formUser.getRawValue();
   // formUser.push(this.userUpdate.id)
    let id = this.userUpdate.id
    if(bool){
      this.api.UpdateUser(formUser,id).subscribe(
        {         
          next:(data:any)=>{
            this.obtenerUser()          
  
          },complete:()=>{
            $("#modalupdateteUser").modal('hide');
            this.formUser.reset();
          },
          error:()=>{}
        }
      )
      
    }else{
      //crear
     
      
      this.api.insertUser(formUser).subscribe(
        {
          next:(data:any)=>{
            this.obtenerUser()          
  
          },complete:()=>{
            $("#modalCreateUser").modal('hide');
            this.formUser.reset();
          },
          error:()=>{}
        }
      )
    }
  }
//eliminar user
  eliminarUser(id:number){
    this.api.deleteUser(id).subscribe(
      {
        next:(data:any)=>{
          this.obtenerUser()  
        },complete:()=>{
        },
        error:()=>{}
      }
    )
  }
  //filtro
  filtroUser(filtro:any){     
    if(filtro==''){
      return this.usuarios
    }else{    
      return this.usuarios.filter((user:any) => user.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        user.apellidos.toLowerCase().includes(filtro.toLowerCase()) ||
        user.usuario.toLowerCase().includes(filtro.toLowerCase()) ||
        user.tipide.toLowerCase().includes(filtro.toLowerCase()) ||
        user.f_nac.toLowerCase().includes(filtro.toLowerCase())  
      )      
    }
  }
  usuariofind(user:any){
    this.userUpdate = user;    
    // pone el value el formuario
    for (const item in this.userUpdate){
      this.formUser.get(item)?.setValue(this.userUpdate[item])     
    }
   
  }
  cant(val:number){
    this.cantpag = val;
  }
  inicializarforom(){
    this.formUser = this.FormBuilder.group({    
      usuario:['',Validators.required],
      nombre:['',Validators.required],
      apellidos:['',Validators.required],
      tipide:['',Validators.required],
      f_nac:['',Validators.required],
      passw:['',Validators.required]
      
    })
  }


}
