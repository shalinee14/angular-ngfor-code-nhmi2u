import { Component } from '@angular/core';

interface child{
  name: string,
  age:number,
}

interface Passanger{
  id : number,
  name: string,
  checkedIn:boolean,
  chekedInDate? : number,
  children:child[] | null //this is safe navigation 
}


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent  {
  name = 'Angular';



  passangers:Passanger[] = [
    {
    id:1,
    name:'Shalinee Rathore',
    checkedIn:true,
    chekedInDate: 12473850000,
    children:null,
    },
    {
    id:2,
    name:'Shreya Ahiwar',
    checkedIn:false,
    chekedInDate: null,
    children:[{name:'Todd', age:12}, {name:'jhone', age:10}],
    },
     {
    id:3,
    name:'Kriti Jain',
    checkedIn:true,
    chekedInDate: 487385345900,
     children:null,
    },
   {
    id:4,
    name:'Meghna Bahety',
    checkedIn:true,
    chekedInDate: 37483589500,
     children:null,
    }];
}
