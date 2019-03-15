import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private any: any;
  anyList: any = {
    rows: [],
    total: this.any,
  };
  params = {
    pageSize: 10,
    pageNumber: 1,
    basestation: '',
  };
  constructor( private http: HttpClient ) { }

  ngOnInit() {
    this.search();
  }
  pageJump(page) {
    this.params.pageNumber = page;
    this.search();
  }
  searchByBase() {
    this.params.pageNumber = 1;
    this.search();
  }
  search() {
    const url = 'http://129.204.33.35:8080/bt-server/tp/selectByFy?' +
      'pageSize=' + this.params.pageSize + '&pageNumber=' + this.params.pageNumber + '&basestation=' + this.params.basestation;
    this.http.get(url)
      .subscribe(res => {
        this.anyList = res;
        // console.log(this.anyList);
      });
  }
}
