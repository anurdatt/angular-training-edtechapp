import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styles: [
  ]
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  constructor(private courseService:CoursesService) { }


  ngOnInit(): void {
    this.courseService.GetAll().subscribe(response => {
      if(response.status == 200 && response.body != null)
        this.courses = response.body;
    });
  }


}
