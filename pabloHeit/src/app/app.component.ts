import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'pabloheit';

  projects:any/* : [{img:string, link:string}] */ = [
    {
      name:"Lunfardo",
      description:"Mazo de anki para aprender lunfardo",
      img:"/assets/Img/Anki.png",
      link:"/assets/Link/Lunfardo.apkg"
    }/* ,
    {
      name:"Lunfardo",
      description:"Lorem impum loren sadanem ajsdiasd its a uhh a",
      img:"/assets/Img/Anki.png",
      link:"/assets/Link/Lunfardo.apkg"
    } */
  ];

  projectQuantity:Number = this.projects.length;

}
