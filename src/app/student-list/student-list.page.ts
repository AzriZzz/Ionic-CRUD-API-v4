import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.page.html",
  styleUrls: ["./student-list.page.scss"]
})
export class StudentListPage implements OnInit {
  studentsData: any;

  constructor(public apiService: ApiService) {
    this.studentsData = [];
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.getAllStudents();
  }

  getAllStudents() {
    //Get saved list of students
    this.apiService.getList().subscribe(res => {
      console.log(res);
      this.studentsData = res;
    });
  }

  delete(item) {
    //Delete item in Student data
    this.apiService.deleteItem(item.id).subscribe(res => {
      //Update list after delete is successful
      this.getAllStudents();
    });
  }
}
