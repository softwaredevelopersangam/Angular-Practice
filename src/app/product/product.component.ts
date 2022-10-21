import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'app-product',
    templateUrl : './product.component.html',
    styleUrls :['./product.component.scss']
})

export class ProductComponents implements OnInit{
    public items :string ='I Love Angular'

    ngOnInit(): void {
        
    }
}