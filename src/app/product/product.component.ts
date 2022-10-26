import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'app-product',
    templateUrl : './product.component.html',
    styleUrls :['./product.component.scss']
})

export class ProductComponents implements OnInit{
    public items :string ='I Love Angular'
    public productName:string = 'Samsung'
    public productid:number = 1234;
    public isProductAvailable!:boolean;
    ngOnInit(): void {
        this.isProductAvailable = (Math.random() > .5)? true : false;
    }
    public getBgColor(){
        // if(this.isProductAvailable === true){
        //     return "orange"
        // }else{
        //     return '#ccc'
        // }
        // if(this.isProductAvailable){
        //     return "orange"
        // }else{
        //     return '#ccc'
        // }
        return this.isProductAvailable?'orange':'#ccc';
    }
}