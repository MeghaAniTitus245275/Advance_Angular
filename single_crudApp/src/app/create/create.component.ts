import { Component, OnInit } from '@angular/core';
import { product } from '../model/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product:product=new product();
 
  constructor(private productService:ProductService,private route:ActivatedRoute,private router:Router){}
  ngOnInit():void{}
  onSubmit(){
    this.saveProduct();
     console.log(this.product);
  }
  saveProduct(){
    this.productService.saveProduct(this.product).subscribe((data)=>{
     // console.log(data);
      this.gotoProductList();
    },
    
      (error)=>console.log(error)
    );
  }
  gotoProductList() {
    this.router.navigate(['/retieve']);
  }
}
