import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs/Rx';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {


  subscription: Subscription;

  constructor() {

    // Lo inspecciona lo ve, lo checa
    //this.regresaObservable().pipe( // Tuberia nos sirve para tratar(trasnformar) datos
    //  retry(2)// numero de intentos
    // )

    // Lo inspecciona lo ve, lo checa
    this.subscription = this.regresaObservable()
    .subscribe(
      numero => console.log( 'Subs', numero), //Este es el callback del next
      error => console.error( 'Error en el obs', error ), //Callback del error
      () => console.log( 'El observador termino' )
    );

   }

  ngOnInit() {
  }

ngOnDestroy(){
  console.log('La pagina se va a cerrar');
  this.subscription.unsubscribe();
}

  regresaObservable(): Observable< any > {

    return new Observable( (observer: Subscriber< any >) => {
      let contador = 0;

      let intervalo = setInterval( () => {

        contador += 1;

        // Map resive la informacion y la transforma la salida en otra cosa
        const salida = {
          valor: contador
        };

        //Registra lo sucedido
        observer.next( salida );

        // if( contador === 3 ){
        //   clearInterval( intervalo );
        //   observer.complete();
        // }

        //if( contador === 2){
        //  // clearInterval( intervalo );
        //  observer.error('Auxilio');
        //}

      }, 1000);

    }).pipe(
        map( (resp: any) => resp.valor ),
        filter( ( valor, index ) => {
          // console.log( valor, index);
          if( ( valor % 2) === 1 ){
            // impar
            return true;
          }else{
            // par
            return false;
          }
          //return true;
        })
     );

  }
}
