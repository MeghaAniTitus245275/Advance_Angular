import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit{

  constructor(private service:ServiceService)
  {
    
  }
  products: Product[]=[];
  ngOnInit(): void {
    this.products = this.getProducts();
  }

  getProducts():any{
    this.service.getProducts().subscribe((products)=>{
    this.products = products;
  });

  }

}
