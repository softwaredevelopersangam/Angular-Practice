import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  public isDnone:Boolean = false
  public someTextFrameWrok:string = 'angular';
  constructor() { }

  ngOnInit(): void {
  }
  onClickFrameWrok(eve:Event){
    let text = ((eve.target)as HTMLElement)!.textContent
    // console.log(text);
    if(text){
      this.someTextFrameWrok = text.toLowerCase().trim()
    }
  }
  onClickDnone(){
    this.isDnone = !this.isDnone
  }
}
