import { AfterViewInit, Component, OnInit } from '@angular/core';
import { EditorService } from '../../services/editor.service';

import Drawflow from 'drawflow';



@Component({
  selector: 'app-canvas-panel',
  templateUrl: './canvas-panel.component.html',
  styleUrl: './canvas-panel.component.scss'
})
 
export class CanvasPanelComponent  implements OnInit, AfterViewInit {

  
  constructor(private editorService:EditorService) { }

  ngOnInit() {
  
  }

  ngAfterViewInit() {

    var id = document.getElementById("drawflow");
    const editor = new Drawflow(id!);
    editor.start();

    var html = `
    <div>
      <div class='node-header'>Set Var</div>
      </div>
    `;
    var data = { "name": '' };

    editor.addNode('github', 0, 1, 150, 300, 'github', data, html, false);

    console.log(editor.export())
  }

}
