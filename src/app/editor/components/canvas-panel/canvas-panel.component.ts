import { AfterViewInit, Component, OnInit } from '@angular/core';
import { EditorService } from '../../services/editor.service';

import Drawflow from 'drawflow';
import { VarDefine } from '../../../scripting/lib/var/define';
import { EditorNode } from '../../../scripting/core/editor-node';



@Component({
  selector: 'app-canvas-panel',
  templateUrl: './canvas-panel.component.html',
  styleUrl: './canvas-panel.component.scss'
})
 
export class CanvasPanelComponent  implements OnInit, AfterViewInit {
  
  editor: Drawflow | undefined;
  cursorPos: {x:number, y:number} = {x:0, y:0};

  constructor(private editorService: EditorService) { }

  ngOnInit() {
  
  }

  ngAfterViewInit() {

    var id = document.getElementById("drawflow");
    this.editor = new Drawflow(id!);

    // this.editor.on('click', this.handleEditorClick);

    this.editor.start();

    this.editor.on('connectionStart', (e) => {
      console.log('connectionStart', e);
    })

    this.editor.on('mouseMove', (e) => {
      // console.log(e);
      this.cursorPos = e;
    })

    this.editor.on('connectionCancel', (e) => {
      
      if(this.editorService.selectedNode) {
        const n = this.editorService.getSelectedNodeData();
        if(n) {
          this.addNode(n, this.cursorPos.x, this.cursorPos.y);
        }
      }

    })

    const n = new VarDefine();

    this.addNode(n, 150, 300);

  }

  addNode(n:EditorNode, pos_x:number, pos_y:number) {

    pos_x = pos_x * ( this.editor!.precanvas.clientWidth / (this.editor!.precanvas.clientWidth * this.editor!.zoom)) 
      - (this.editor!.precanvas.getBoundingClientRect().x * ( this.editor!.precanvas.clientWidth / (this.editor!.precanvas.clientWidth * this.editor!.zoom)));
    pos_y = pos_y * ( this.editor!.precanvas.clientHeight / (this.editor!.precanvas.clientHeight * this.editor!.zoom)) 
      - (this.editor!.precanvas.getBoundingClientRect().y * ( this.editor!.precanvas.clientHeight / ( this.editor!.precanvas.clientHeight * this.editor!.zoom)));

    const sig = n.signature();

    var html = n.nodeHtml;
    var data = { "name": '' };

    this.editor!.addNode('github', sig.inputs.length, sig.outputs.length, pos_x, pos_y, 'github', data, html, false);

  }

}
