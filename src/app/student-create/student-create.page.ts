import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { Router } from "@angular/router";
import { Student } from "../models/student";

@Component({
  selector: "app-student-create",
  templateUrl: "./student-create.page.html",
  styleUrls: ["./student-create.page.scss"]
})
export class StudentCreatePage implements OnInit {
  data: Student;

  constructor(public apiService: ApiService, public router: Router) {
    this.data = new Student();
  }

  ngOnInit() {}

  submitForm() {
    console.log(this.data);
    this.apiService.createItem(this.data).subscribe(res => {
      console.log(res);
      this.router.navigate(["list"]);
    });
  }
}
