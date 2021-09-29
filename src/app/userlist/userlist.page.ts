import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {
  userData: any = [];
  isLoadedData = false;
  page_number = 1;
  page_limit = 10;
  searchTerm: string = '';
  defaultImage = 'https://cdn-icons-png.flaticon.com/512/149/149071.png';
  constructor(private service: ServiceService) { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoadedData = true;
    }, 3000);
    this.getUserList(false, '');
  }
  getUserList(isLoad, event) {
    let selecPara = {
      "pageNo": this.page_number,
      "recordPerPage": this.page_limit
    };
    this.service.getUser(selecPara).subscribe(res => {
      console.log(res);
      // this.userData = res;
      for (let i = 0; i < res.length; i++) {
        this.userData.push(res[i]);
      }

      if (isLoad) {
        event.target.complete();
      }
        this.page_number++;
    }, error => {
      console.log(error);
    })
  }

  doInfinite(event) {
    this.getUserList(true, event);
  }

  setFilteredLocations(searchbar){
    let text = searchbar.target.value;
    
    if(text == null || text == undefined  || text == '' || text.length == 0) {
      this.getUserList(false, '');
    }
    this.userData =  this.userData.filter((location) => {
      if (location.FullName.toLowerCase().indexOf(text.toLowerCase())  > -1 ||
      location.Email.toLowerCase().indexOf(text.toLowerCase())  > -1) {
        return true;
      }

      return false;
    });
  }
}
