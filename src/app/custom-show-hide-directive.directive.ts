import { Directive,Input,OnChanges,ViewContainerRef,TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCustomShowHideDirective]'
})
export class CustomShowHideDirectiveDirective implements OnChanges {

  @Input() appCustomShowHideDirective: any;

  constructor(private vcr:ViewContainerRef,private tempRefs:TemplateRef<any>) { }

  ngOnChanges(): void{
    console.log('Check ===',this.appCustomShowHideDirective);
    this.appCustomShowHideDirective ?
     this.vcr.createEmbeddedView(this.tempRefs):
     this.vcr.clear()
  }
}
