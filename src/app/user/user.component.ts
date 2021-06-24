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
  formatData!: any[];
  constructor(private language: LanguageService) {}

  ngOnInit(): void {
    this.eachLang();
    this.format();
  }
  eachLang() {
    language.forEach((lang, i) => {
      let jsonURL = `http://localhost:4200/assets/i18n/${lang}.json`;
      this.language.getData(jsonURL).subscribe((data) => this.data.push(data));
    });
  }

  format() {
    this.formatData = this.data.map((lang) => {
      Object.values(lang);
      console.log(lang);
    });
  }
}
