import { ChangeDetectionStrategy, Component } from '@angular/core';
import { strToTdl, TodolistService, TodoItem } from './todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(private tdl:TodolistService) {
    /* Ajoutez un paramètre de type TodolistService au constructeur */

  }
  get obSListe(){
    return this.tdl.observable;
  }

  ajouterTache(t:string):void{
    this.tdl.append(t);
  }
  supprimerTache(t:TodoItem):void{
    this.tdl.remove(t);
    console.log(t);
  }
  updateTache(label: string, item:TodoItem): void{
    this.tdl.update({label}, item);
  }
  do(item:TodoItem){
    if(item.isDone){
      this.tdl.update({isDone: false}, item);
    }else{
      this.tdl.update({isDone: true}, item);
    }
  }
}
