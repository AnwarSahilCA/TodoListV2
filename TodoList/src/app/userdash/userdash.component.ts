import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Events } from '../model/Event';
import { comments } from '../model/comments';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterServiceService } from '../service/router-service.service';


@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {
  comment:comments=new comments();
  isIconActive = false;
  constructor(private router:RouterServiceService,private service:ServiceService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
  iconRegistry.addSvgIcon('check', sanitizer.bypassSecurityTrustResourceUrl('assets/check-circle.svg'));
  
  iconRegistry.addSvgIcon('cross', sanitizer.bypassSecurityTrustResourceUrl('assets/cross-circle.svg'));  }
  ngOnInit(): void {
    this.getProducts();
    this.size=this.events.length;
    
  }
  getProducts(): any {
    this.service.getPending().subscribe(
      (i)=>{
        this.events=i;
      })
   
  }
 

  searchText: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  size:number=0;
events:Events[]=[];

 

  get filteredItems(): any[] {
    if (!this.events) {
      return [];
    }
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.events.filter(i =>
      i.title && i.title.toLowerCase().includes(this.searchText.toLowerCase())
    ).slice(startIndex, endIndex);
  }
  event:any;
onSubmit(eventid:number){
  this.comment.event_id=eventid;
  this.saveProduct();
  console.log(this.comment);
}
saveProduct(){
  this.service.saveProduct(this.comment).subscribe(data=>{
    console.log(data);
  },
  error=>console.log(error));
}
updatestatus(eventId: number,product:any) {
  
  product.showcheck=!product.showcheck;

this.service.getProductById(eventId).subscribe(
  (product) => {
    this.event = product;
    this.event.status = "completed";
    

    this.service.updateProduct(this.event).subscribe(
      (response) => {
        console.log('Product updated successfully');
        this.getProducts()
      },
      (error) => {
        console.log('Error updating product:', error);
      }
    );
  },
  (error) => {
    console.log("Error fetching product:", error);
  }
);

}
id:number=0;
object:any
fetch(id:number):any{
this.service.getProductById(id).subscribe(
  (i)=>{
    this.object=i
   this. id=this.object.eventId
    console.log(this.id);
})
}
toCompleted(){
  this.router.tocomplete();
}
toPending(){
  this.router.topending();
}
progressBarWidth=10;
color = 'primary';
mode = 'buffer';
value = 50;
bufferValue = 75;
}

