import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-if',
  templateUrl: './custom-if.component.html',
  styleUrls: ['./custom-if.component.css']
})
export class CustomIfComponent {
    show:boolean=false;

    constructor(){}

  onCheckboxChanged(checkboxInput:HTMLInputElement){
      console.log(checkboxInput)
      this.show=checkboxInput.checked
  }
}
