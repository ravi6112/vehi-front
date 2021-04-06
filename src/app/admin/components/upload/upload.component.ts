import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  fileName = '';

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append("file", file);

      // const headers = new HttpHeaders({'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFtZWVzaGEiLCJpYXQiOjE2MTY3NDg5NjgsImV4cCI6MTYxNzM1Mzc2OH0.YM2QHHjmfiDf8tVbvRXIRBlXj10wfI5yqUKs78fbGEk;' });
      const upload$ = this.http.post("http://localhost:3000/api/vehicles", formData);
            // console.log(formData);
      upload$.subscribe();
    }
  }
}
