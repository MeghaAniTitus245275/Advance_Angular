import { Component, OnInit } from '@angular/core';
import { product } from '../model/Product';
import { Router} from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-retieve',
  templateUrl:'./retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent  implements OnInit {
  constructor(private service:ProductService,private router:Router)
  {
    
  }
  products: product[]=[];
  ngOnInit(): void {
    this.products = this.getProducts();
  }

  getProducts():any{
    this.service.getProducts().subscribe((products)=>{
    this.products = products;
  });

  }
  deleteProduct(id:number): void {
    
    this.service.deleteProduct(id).subscribe(
        (data) => {
          this.products=this.products.filter(item=>item.productId!==id);
          this.gotoProductList();
        },
        (error) => {
          console.log('Failed to delete product', error);
          // Handle the error if the deletion fails
        }
      );
      }
      gotoProductList() {
        this.router.navigate(['/retieve']);
      }

}
