import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
  })
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router, private afDB: AngularFirestore) {}

  initAuthListener() {
    this.afAuth.authState.subscribe( fbUser => {
      console.log(fbUser);
    });
  }

  crearUsuario(nombre: string, email: string, password: string) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then( resp => {

        const user: User = {
          uid: resp.user.uid,
          nombre: nombre,
          email: resp.user.email
        };

        this.afDB.doc(`${user.uid}/usuario`)
            .set(user)
            .then( () => this.router.navigate(['/']));
      })
      .catch((error) => {
        console.error(error);
        alert('Error');
      });
  }

  login(email: string, password: string) {
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then((resp) => {
        console.log(resp);
        Swal({
          title: 'Bienvenido!!',
          text: 'Inicio de sesion verificada',
          type: 'success',
          confirmButtonText: 'Cool',
        });
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.error(error);
        Swal({
          title: 'Error!',
          text: 'Ha ocurrido un error al iniciar sesion',
          type: 'error',
          confirmButtonText: 'Cool',
        });
      });
  }


  logout() {
    this.router.navigate(['/login']);
    this.afAuth.auth.signOut();
  }

  isAuth() {
    return this.afAuth.authState.pipe(map( fbUser => {
      if ( fbUser == null ) {
        this.router.navigate(['/login']);
      }

      return fbUser != null;
    }));
  }

}
