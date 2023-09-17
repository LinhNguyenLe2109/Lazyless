import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-cell',
  templateUrl: './content-cell.component.html',
  styleUrls: ['./content-cell.component.css']
})
export class ContentCellComponent {
  @Input() public type !: string;
  ngOnInit() {
    console.log(this.type);
  }
}
