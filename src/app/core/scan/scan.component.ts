import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  public selectedFile: File;

  constructor() { }

  ngOnInit() {
    console.log('scan com');
  }
  onFileChanged(event): void {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);

  }




}
