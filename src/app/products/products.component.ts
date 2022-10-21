import { OnInit, NgModule, Component } from '@angular/core';

@Component({
    selector:'app-products',
    templateUrl:'./products.component.html',
    // template:`
    //     <p>single component created</p>
    //     <app-product></app-product>
    //     <app-product></app-product>
    // `,
    
    styleUrls :['./product.component.scss']
    // styles:[`
    //         p{
    //             background-color:red;
    //         }
    // `]
})

export class ProductsComponents implements OnInit{   
    public isDisabled: boolean = true;
    public productStates:string = 'No Product Add to Cart'
    public productAddStates:number = 0;
    // $Event: any;
    public skills:string[] = [ 'Html', 'Angular', 'CSS', 'Javascript'];
    ngOnInit(): void {
        // throw new Error('Method not implemented.');
        console.log('its init');
        setTimeout(() => {
            this.isDisabled = !this.isDisabled
        }, 3000);
    }
    onClickProduct(){
        // console.log('klfajsd');
        let sum = this.productAddStates++;
        this.productStates = `${sum} Product Added`;
    }
    onClickSearch(eve:Event){
        let inputValue = ((eve.target) as HTMLInputElement)!.value
        console.log(inputValue);
        
    }
}