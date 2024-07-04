import { Component } from '@angular/core';
import { EditorService } from '../../services/editor.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-palete-panel',
  templateUrl: './palete-panel.component.html',
  styleUrl: './palete-panel.component.scss'
})

export class PaletePanelComponent {

  constructor(private editorService: EditorService) { }

  currentNode: any = undefined;

  tree: MenuItem[] | undefined;

  opts = [{
    label: 'nodes',
    value: 'nodes'
  }, {
    label: 'script',
    value: 'script'
  }]

  ngOnInit() {
    this.tree = this.editorService.getNodeTree();
  }

  buildNodeTree() {
    const sigs = this.editorService.getNodeSignatures();
    for(const key of Object.keys(sigs)) {
      console.log(key, sigs[key]);
    }
  }

  nodeSelect(event: any) {
    this.currentNode = event.node;
    this.editorService.selectedNode = event.node.id;
  }

}
