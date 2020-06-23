import { Component, OnInit } from "@angular/core";
import { ExpObjModule } from "src/app/model/exp-obj/exp-obj.module";
import { ResumeDataService } from "src/app/services/Data/resume-data.service";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.css"],
})
export class ResumeComponent implements OnInit {
  expObjs: ExpObjModule[];

  curYear = new Date().getFullYear();
  startedYear = 2008;
  startedUnity = 2013;
  currentAmountOfYears: number = this.curYear - this.startedYear;
  yearsOfBeenUnityDev: number = this.curYear - this.startedUnity;

  constructor(private resumeData: ResumeDataService) {}

  ngOnInit() {
    this.resumeData.getExperience();
    this.expObjs = this.resumeData.allExpObjs;
  }
  getUnityYears(): string {
    return this.yearsOfBeenUnityDev.toString();
  }
  getTotalYears(): string {
    return this.currentAmountOfYears.toString();
  }
}
