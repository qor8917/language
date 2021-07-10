import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { language } from '../../assets/models/language';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  data: any[] = [];
  formatData: any[] = [];
  obj = {
    설비효율:'',
    바바효율:'',
    사사효율:'',
    왕왕효율:''
  }
  constructor(private language: LanguageService,private http:HttpClient) {}

  ngOnInit(): void {
   
  }
  focusOut(e:any){
    const {name,value} = e.target;
    this.obj= {...this.obj,[name]:value}
    console.log(this.obj);
    this.http.post("http://localhost:8080/url",{...this.obj})
  }
}
