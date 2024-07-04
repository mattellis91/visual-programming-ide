import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'app-node-dialog',
  templateUrl: './node-dialog.component.html',
  styleUrl: './node-dialog.component.scss'
})
export class NodeDialogComponent {
  visible: boolean = false;
  tree: MenuItem | undefined;

  constructor(private editorService: EditorService) { }

  ngOnInit() {
    this.tree = this.editorService.getNodeTree();
  }

  showDialog() {
      this.visible = true;
  }
  
  cancel() {
    console.log('asd');
      this.visible = false;
  }
}
