import { Component } from '@angular/core';
import { EditorService } from '../../services/editor.service';

interface Color { hex: string, description: string, action: string | undefined }
@Component({
  selector: 'app-palete-panel',
  templateUrl: './palete-panel.component.html',
  styleUrl: './palete-panel.component.scss'
})

export class PaletePanelComponent {

  constructor(private editorService: EditorService) { }

  tree: any = [
    {
      label: 'main',
      draggable: false,
      Droppable: false,
      expanded: true,
      children: [
        {
          label: 'if',
        },
        {
          label: 'or'
        }
      ]
    }
  ]

  ngOnInit() {
   
  }

}
