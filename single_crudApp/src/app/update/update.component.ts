import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit{

  productId: number = 0;
  product: any;
  
  constructor(private productService:ProductService,private route:ActivatedRoute,private router:Router){
 
  }

  ngOnInit():void{
   this.productId=this.route.snapshot.params['id'];
   this.productService.getProductById(this.productId).subscribe((product)=>{this.product=product;},
   (error)=>{console.log("message",error);});

  }
 

  saveUpdatedProduct(): void {
    this.productService.updateProduct(this.product).subscribe(
      (data) => {
        console.log('Product updated successfully');
       this.gotoProductList();
       
      },
      (error) => {
        console.log('Error updating product:', error);
      }
    );
  }

  gotoProductList() {
    this.router.navigate(['/retieve']);
  }
}
         
         
         
          