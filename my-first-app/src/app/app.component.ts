import { Component } from '@angular/core';
import { Observable, subscribeOn } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpDataRequestService } from './http-data-request.service';

import { DatetimeService } from './datetime.service';
import { JsondataService } from './jsondata.service';
import { FormdataService } from './formdata.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
//    getdate:any;
//    getinfo:any;
//    jsondata:any;
//    count=0;
//    item:any; 

//    constructor(public dt:DatetimeService,private data:JsondataService,public form:FormdataService){
    
//    this.getdate = this.dt.today;

//    this.getinfo = [10,20,30];

//    this.jsondata = this.data.jsondata1;


//    this.count = this.dt.increment();

// }





//     user={
//       "email":'',
//       "password":'',
//       "city":'',
//       "address":'',
//       "address2":'',
//       "zip":''
//     };

//     onSubmitofform(user:any){
//       console.log(user);

//     }

//     userdata={
//       "firstname":'',
//       "lastname":'',
//       "email":'',
//       "password":''
//     };

//     onSubmit(userdata:any){
//       this.userdata=userdata;
//       this.form.sendData(this.userdata);
//     }

//     table:any=[];
//     number='';
//     printTable(){
//       console.log(this.number);

//       for(let i=1;i<=10;i++){
//         this.table.push(i*Number(this.number));
//       }

//     }

//     from:any;
//     to:any;
//     price:any;

//      printDays(from:any,to:any,price:any){

//         this.from = new Date(from).getTime();
//         this.to=new Date(to).getTime();
//         let day =(this.to-this.from)/(1000*3600*24);
//         console.log(from);
//         console.log(to);
//         console.log(day);
//         console.log("total Amount : "+ (day*price));
      

//     }





  // imgUrl = ".././assets/images/image.jpg";
  // count=0;
  // countValue(){
  //   this.count+=1;
  // }

  // fname = "";

  // inputValue(){
  //   this.fname="Hinal";
  // }

  // callValue(){
    
  // }

  // fname="Hinal";
  // lname="Hapani";
  // address=" ";
  // email = " ";

  // able = true;
  // gnumber =0;


  // numArrays = [1,2,3,4,5,6];
  // strArrays = ["James","Martin","aaa","Goslin"];

  // itemsent="laptop";

  // item =100;
  // newArrays = [10,20,35,45,50];
  // str= "";


  // classfeature(){
  //   return 'red';
  // }

  
  // enable(){
  //   this.str="Helloooo";
  // }

  // disable(){

  //   this.str= "";

  // }

  // appendstyle={
  //   background:'green',color:'red',margin:'30px'
  // }



  // deletedata(data:any){
  //   let index = this.jsondata.indexOf(data);
  //   this.jsondata.splice(index,1);
  
  // }

  // jsondata=
  // [
  //   {
  //     "id": 1,
  //     "name": "Leanne Graham",
  //     "username": "Bret",
  //     "email": "Sincere@april.biz",
  //     "address": {
  //       "street": "Kulas Light",
  //       "suite": "Apt. 556",
  //       "city": "Gwenborough",
  //       "zipcode": "92998-3874",
  //       "geo": {
  //         "lat": "-37.3159",
  //         "lng": "81.1496"
  //       }
  //     },
  //     "phone": "1-770-736-8031 x56442",
  //     "website": "hildegard.org",
  //     "company": {
  //       "name": "Romaguera-Crona",
  //       "catchPhrase": "Multi-layered client-server neural-net",
  //       "bs": "harness real-time e-markets"
  //     }
  //   },
  //   {
  //     "id": 2,
  //     "name": "Ervin Howell",
  //     "username": "Antonette",
  //     "email": "Shanna@melissa.tv",
  //     "address": {
  //       "street": "Victor Plains",
  //       "suite": "Suite 879",
  //       "city": "Wisokyburgh",
  //       "zipcode": "90566-7771",
  //       "geo": {
  //         "lat": "-43.9509",
  //         "lng": "-34.4618"
  //       }
  //     },
  //     "phone": "010-692-6593 x09125",
  //     "website": "anastasia.net",
  //     "company": {
  //       "name": "Deckow-Crist",
  //       "catchPhrase": "Proactive didactic contingency",
  //       "bs": "synergize scalable supply-chains"
  //     }
  //   },
  //   {
  //     "id": 3,
  //     "name": "Clementine Bauch",
  //     "username": "Samantha",
  //     "email": "Nathan@yesenia.net",
  //     "address": {
  //       "street": "Douglas Extension",
  //       "suite": "Suite 847",
  //       "city": "McKenziehaven",
  //       "zipcode": "59590-4157",
  //       "geo": {
  //         "lat": "-68.6102",
  //         "lng": "-47.0653"
  //       }
  //     },
  //     "phone": "1-463-123-4447",
  //     "website": "ramiro.info",
  //     "company": {
  //       "name": "Romaguera-Jacobson",
  //       "catchPhrase": "Face to face bifurcated interface",
  //       "bs": "e-enable strategic applications"
  //     }
  //   },
  //   {
  //     "id": 4,
  //     "name": "Patricia Lebsack",
  //     "username": "Karianne",
  //     "email": "Julianne.OConner@kory.org",
  //     "address": {
  //       "street": "Hoeger Mall",
  //       "suite": "Apt. 692",
  //       "city": "South Elvis",
  //       "zipcode": "53919-4257",
  //       "geo": {
  //         "lat": "29.4572",
  //         "lng": "-164.2990"
  //       }
  //     },
  //     "phone": "493-170-9623 x156",
  //     "website": "kale.biz",
  //     "company": {
  //       "name": "Robel-Corkery",
  //       "catchPhrase": "Multi-tiered zero tolerance productivity",
  //       "bs": "transition cutting-edge web services"
  //     }
  //   },
  //   {
  //     "id": 5,
  //     "name": "Chelsey Dietrich",
  //     "username": "Kamren",
  //     "email": "Lucio_Hettinger@annie.ca",
  //     "address": {
  //       "street": "Skiles Walks",
  //       "suite": "Suite 351",
  //       "city": "Roscoeview",
  //       "zipcode": "33263",
  //       "geo": {
  //         "lat": "-31.8129",
  //         "lng": "62.5342"
  //       }
  //     },
  //     "phone": "(254)954-1289",
  //     "website": "demarco.info",
  //     "company": {
  //       "name": "Keebler LLC",
  //       "catchPhrase": "User-centric fault-tolerant solution",
  //       "bs": "revolutionize end-to-end systems"
  //     }
  //   },
  //   {
  //     "id": 6,
  //     "name": "Mrs. Dennis Schulist",
  //     "username": "Leopoldo_Corkery",
  //     "email": "Karley_Dach@jasper.info",
  //     "address": {
  //       "street": "Norberto Crossing",
  //       "suite": "Apt. 950",
  //       "city": "South Christy",
  //       "zipcode": "23505-1337",
  //       "geo": {
  //         "lat": "-71.4197",
  //         "lng": "71.7478"
  //       }
  //     },
  //     "phone": "1-477-935-8478 x6430",
  //     "website": "ola.org",
  //     "company": {
  //       "name": "Considine-Lockman",
  //       "catchPhrase": "Synchronised bottom-line interface",
  //       "bs": "e-enable innovative applications"
  //     }
  //   },
  //   {
  //     "id": 7,
  //     "name": "Kurtis Weissnat",
  //     "username": "Elwyn.Skiles",
  //     "email": "Telly.Hoeger@billy.biz",
  //     "address": {
  //       "street": "Rex Trail",
  //       "suite": "Suite 280",
  //       "city": "Howemouth",
  //       "zipcode": "58804-1099",
  //       "geo": {
  //         "lat": "24.8918",
  //         "lng": "21.8984"
  //       }
  //     },
  //     "phone": "210.067.6132",
  //     "website": "elvis.io",
  //     "company": {
  //       "name": "Johns Group",
  //       "catchPhrase": "Configurable multimedia task-force",
  //       "bs": "generate enterprise e-tailers"
  //     }
  //   },
  //   {
  //     "id": 8,
  //     "name": "Nicholas Runolfsdottir V",
  //     "username": "Maxime_Nienow",
  //     "email": "Sherwood@rosamond.me",
  //     "address": {
  //       "street": "Ellsworth Summit",
  //       "suite": "Suite 729",
  //       "city": "Aliyaview",
  //       "zipcode": "45169",
  //       "geo": {
  //         "lat": "-14.3990",
  //         "lng": "-120.7677"
  //       }
  //     },
  //     "phone": "586.493.6943 x140",
  //     "website": "jacynthe.com",
  //     "company": {
  //       "name": "Abernathy Group",
  //       "catchPhrase": "Implemented secondary concept",
  //       "bs": "e-enable extensible e-tailers"
  //     }
  //   },
  //   {
  //     "id": 9,
  //     "name": "Glenna Reichert",
  //     "username": "Delphine",
  //     "email": "Chaim_McDermott@dana.io",
  //     "address": {
  //       "street": "Dayna Park",
  //       "suite": "Suite 449",
  //       "city": "Bartholomebury",
  //       "zipcode": "76495-3109",
  //       "geo": {
  //         "lat": "24.6463",
  //         "lng": "-168.8889"
  //       }
  //     },
  //     "phone": "(775)976-6794 x41206",
  //     "website": "conrad.com",
  //     "company": {
  //       "name": "Yost and Sons",
  //       "catchPhrase": "Switchable contextually-based project",
  //       "bs": "aggregate real-time technologies"
  //     }
  //   },
  //   {
  //     "id": 10,
  //     "name": "Clementina DuBuque",
  //     "username": "Moriah.Stanton",
  //     "email": "Rey.Padberg@karina.biz",
  //     "address": {
  //       "street": "Kattie Turnpike",
  //       "suite": "Suite 198",
  //       "city": "Lebsackbury",
  //       "zipcode": "31428-2261",
  //       "geo": {
  //         "lat": "-38.2386",
  //         "lng": "57.2232"
  //       }
  //     },
  //     "phone": "024-648-3804",
  //     "website": "ambrose.net",
  //     "company": {
  //       "name": "Hoeger LLC",
  //       "catchPhrase": "Centralized empowering task-force",
  //       "bs": "target end-to-end models"
  //     }
  //   }
  // ]
//   cartItems=[
//     {
//       "id":'',
//       "name":'',
//       "price":'',
//       "Qty":'',
//       "location":'',
//       "stock":'',
//       "url":''

//     }
//   ];
//   totalQty= 0;
//   totalAmt=0;

//  counter=0;
//   addItemToCart(product: any){
//     this.counter++;
//     this.cartItems.push(product);
//     this.totalQty +=Number(product.Qty);
//     this.totalAmt +=Number(product.price);
//   }

constructor(private ht:HttpDataRequestService){}

result:any;
ngOnInit() {

  this.ht.getdata().subscribe((data) => this.show(data));
  //subscribe((data) => console.log(data));
}

show(data:any){
  this.result = data;
}
id='';
name='';
username="";

data(id:any){
  console.log(id);
  this.name = this.result[id].name;
  this.username = this.result[id].username;
  
}

user = {
  
}

processData(data:any){

}
userRegForm(){
  console.log(this.userRegForm.value);
  this.userService.user(this.userRegForm.value).subscribe(user => console.log(user));
}



}
