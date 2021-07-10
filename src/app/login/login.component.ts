import { Component, OnInit } from '@angular/core';
type Role = {
  id: string;
  hq_mes_role_id: string;
  department: string;
  site: string;
  goods: string;
  userType: string;
}
type Menus={
  name:string,
  goods:string[]
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Totalmenus:Menus[]=[]
  
  constructor() { }


  ngOnInit(): void {
    const sample = [
      {
        id: '60df0622b53ae456b2c92073',
        hq_mes_role_id: 'RDSHD0146',
        department: '모듈',
        site: '사진',
        goods: 'EKDI',
        userType: '디자이너',
      },
      {
        id: '60df0622b53ae456b2c92073',
        hq_mes_role_id: 'RDSHD0146',
        department: '모듈',
        site: '고신',
        goods: 'AKWI',
        userType: '디자이너',
      },
      {
        id: '60df0622b53ae456b2c92073',
        hq_mes_role_id: 'RDSHD0146',
        department: '모듈',
        site: '고신',
        goods: 'ISM',
        userType: '디자이너',
      },
      {
        id: '60df06932e764f4f518e1cb7',
        hq_mes_role_id: 'RDSHD0147',
        department: '모듈',
        site: '필리핀',
        goods: 'ISM',
        userType: '관리자',
      },
      {
        id: '60df06932e764f4f518e1cb8',
        hq_mes_role_id: 'RDSHD0148',
        department: '모듈',
        site: '필리핀',
        goods: 'ISM',
        userType: '일반유저',
      },
    ];
    
    
    
    const sites: { [site:string]: Role[] } = {};
    //{site:[]}
    sample.forEach(res => {
      const siteName = res.site
      //sites가 빈값이면 우선 빈배열을 만들어줌
      if (!sites[siteName]) sites[siteName] = []
      sites[siteName].push(res)
      console.log(sites);
      
    })
   
    
    const arr = Object.entries(sites)
    arr.map(([name,value])=>{
      const menus:Menus={name:'',goods:[]}
      menus.name = name
      value.forEach(({goods,userType})=>{
        menus.goods = [...menus.goods,goods]
      })
      //중복제거
      menus.goods=Array.from(new Set(menus.goods))
      this.Totalmenus.push(menus)
    })
    
  }
}


