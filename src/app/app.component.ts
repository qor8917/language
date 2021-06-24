import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('ko');
    //해당 언어로 translate가 활성화 됨
    this.translate.use('ko');
  }
  onChange(event: any): void {
    this.translate.use(event.target.value);
  }
}
