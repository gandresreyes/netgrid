import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor( private http:HttpClient) { }

  //leer info back

  getinfo(){
    return this.http.get(`http://127.0.0.1:8000/api/usuarios`);
  }

  insertUser(datos:any){
    return this.http.post(`http://127.0.0.1:8000/api/addusuario`,datos) ;

  }
  UpdateUser(datos:any, id:number){    
    return this.http.put(`http://127.0.0.1:8000/api/updateusuario/`+id ,datos) ;

  }

  deleteUser(id:number){     
    return this.http.delete(`http://127.0.0.1:8000/api/deletesuario/`+id ) ;
  }

}
