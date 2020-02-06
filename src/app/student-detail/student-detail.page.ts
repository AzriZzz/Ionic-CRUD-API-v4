import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Student } from "../models/student";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-student-detail",
  templateUrl: "./student-detail.page.html",
  styleUrls: ["./student-detail.page.scss"]
})
export class StudentDetailPage implements OnInit {
  id: number;
  data: Student;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new Student();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiService.getItem(this.id).subscribe(res => {
      console.log(res);
      this.data = res;
    });
  }
}


