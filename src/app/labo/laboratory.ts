import { filter, from, map, Observable, of, tap } from 'rxjs';

export class Laboratory {

  //fonction classique
  classique(): void {
    console.log("je suis une fonction classique qui ne prend aucun argument et renvoi rien")
  }
  somme(x: number, y: number): number {  //prend 2 arguments et renvoi la somme
    return x + y;
  }

  //fonction anonyme 
  //prend 2 arguments et renvoi l'addition, de type number, qui sera affiché sur la console
  sum = (x: number, y: number): number => { return x + y; }   //accolades non indispensable car une seule instruction
  display = () => console.log("hello world");   //prend pas d'argument et affiche hello

  tests(): void {
    this.classique();
    this.somme(5, 7); // 12 -> affiche rien !
    console.log(this.sum(10, 20));  // 30
    this.display(); // hello

    const numbers = [1, 2, 3, 4, 5, 6];
    const mod = numbers.filter((value) => (value % 2) === 0); //filter renvoi un tableau avec les valeurs qui valident la condition
    console.log(mod); //affiche 2 4 6

    const materials = ['A380', 'A320', 'A350'];
    const result = materials.map(material => material + '-2022'); //crée un nouveau tableau avec une concaténation
    //A380-2022,A320-2022,A350-2022
    console.log(result);

    let tab = [
      "Si vous êtes ici, c'est parce que c'est pas clair les fonctions fléchées",
      "Rassurez vous, ça devrait aller mieux d'ici peu ;)"
    ];
    //les 2 approches renvoient dans un tableau le nombre de caractères par ligne de notre tableau tab
    let tab2 = tab.map(function (s) { return s.length }); //sans les fonctions fléchées
    let tab3 = tab.map(s => s.length); // avec ... moins verbeux n'est-ce pas ? faut juste s'habituer

    //Surcharge de fonction ... 

    //Les Observables
    const data$ = new Observable(observer => { // on définit ici un observable (qui peut être observé)
      observer.next('first call' + counter++);   //voici l'appel qui sera sollicitée par les observateurs ayant souscrit
      setTimeout(() => {
        observer.next('second call' + counter++); //2ème appel 5 secondes plutard ...
      }, 5000);
    });

    let counter = 0;
    const observer1 = data$.subscribe({   //l'observateur1 souscrit à l'observable et gère 2 cas :
      next: value => console.log('1-' + value),  //chaque fois qu'une valeur est émise par l'observable, il l'affiche
      error: err => console.log('1-' + err),     //affichage en cas d'erreur
    });

    //et puis un autre observateur sur le même Observable
    data$.subscribe((value) => {
      console.info('2--' + value);
    });

    //création d'un observable à partir d'un tableau de string
    const dataTable$ = from(['monday','tuesday','wednesday', 'thursday' , 'friday' , 'saturday' , 'sunday']);
    dataTable$.subscribe(val => console.log(val));  //soucription à celui-ci

    //voilà donc un tuyau qui permet d'appliquer plusieurs traitement via les opérateurs tap, map, ...
    //chaque opérateur ou fonction renvoi un observable qui sera traité par l'opérateur suivant
    data$.pipe(
      tap(item => console.log('3---' +item)),     //1ère affichage + renvoi de la source
      map(dat => dat + ' end')                    //map : renvoi un observable avec chaque donnée transformée
    ).subscribe(                   //soucription à celui-ci        
      dis => console.log('hi ' + dis)
    );

    //of crée un Observable sur une liste de chiffres qui passent par un tuyau qui filtre(pair) puis modifie les datas avec map
    //avant de renvoyer un observable auquel il faut souscrire si on veut avoir un affichage
    const ob$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(filter( v => v % 2 === 0), map( v => v * 10));
    ob$.subscribe(
        value => console.log(value)
    );
  }
}
