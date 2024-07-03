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
      label: 'Variables',
      draggable: false,
      Droppable: false,
      children: [
        {
          label: 'New Var',
        },
        {
          label: 'Get Var'
        },
        {
          label: 'Set Var'
        },
        {
          label: 'Increment Var'
        },
      ]
    },
    {
      label: 'Lists',
      draggable: false,
      Droppable: false,
      children: [
        {
          label: 'New List',
        },
        {
          label: 'Append List'
        },
        {
          label: 'Get List Item'
        },
      ]
    },
    {
      label: 'Control Flow',
      draggable: false,
      Droppable: false,
      children: [
        {
          label: 'If'
        },
        {
          label: 'While'
        },
        {
          label: 'For'
        },
        {
          label: 'For Each'
        },
      ]
    },
    {
      label: 'IO',
      draggable: false,
      Droppable: false,
      children: [
        {
          label: 'Get Input'
        },
        {
          label: 'Log'
        }
      ]
    },
    {
      label: 'Math',
      draggable: false,
      Droppable: false,
      children: [
        {
          label: 'Add'
        },
        {
          label: 'Subtract'
        },
        {
          label: 'Multiply'
        },
        {
          label: 'Divide'
        },
        {
          label: 'Modulus'
        },
        {
          label: 'Random'
        }
      ]
    },
    {
      label: 'Logic',
      draggable: false,
      Droppable: false,
      children: [
        {
          label: 'And'
        },
        {
          label: 'Or'
        },
        {
          label: 'Not'
        },
        {
          label: 'Equals'
        },
        {
          label: 'Not Equals'
        },
        {
          label: 'Greater Than'
        },
        {
          label: 'Less Than'
        },
        {
          label: 'Greater Than or Equal'
        },
        {
          label: 'Less Than or Equal'
        },
        {
          label: 'Has A Value'
        },
        {
          label: 'Does Not Have A Value'
        }
      ]
    },
    {
      label: 'Editor',
      draggable: false,
      Droppable: false,
      children: [
        {
          label: 'Group'
        },
        {
          label: 'Textbox'
        }
      ]
    }
  ]

  opts = [{
    label: 'nodes',
    value: 'nodes'
  }, {
    label: 'script',
    value: 'script'
  }]

  ngOnInit() {
   
  }

}
