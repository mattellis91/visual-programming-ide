import { Component } from '@angular/core';

@Component({
  selector: 'app-node-dialog',
  templateUrl: './node-dialog.component.html',
  styleUrl: './node-dialog.component.scss'
})
export class NodeDialogComponent {
  visible: boolean = true;

  showDialog() {
      this.visible = true;
  }
  
  cancel() {
    console.log('asd');
      this.visible = false;
  }
}
