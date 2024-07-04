import { Injectable } from '@angular/core';
import { I_NodeSignature } from '../../scripting/core/interfaces';
import { getAllSignatures, nameSpaceLabelMap, libNodes } from '../../scripting/lib/signatures';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  selectedNode:string | undefined;
  nodeSignatures: Record<string, I_NodeSignature> | undefined;
  nodeTree: MenuItem[] = [];

  constructor() { }

  getNodeSignatures() {
    if(this.nodeSignatures) {
      return this.nodeSignatures;
    }
    this.nodeSignatures = getAllSignatures();
    return this.nodeSignatures;
  }

  getNodeTree() {
    if(this.nodeTree.length) {
      return this.nodeTree;
    }
    this.buildNodeTree();
    return this.nodeTree;
  }

  getSelectedNodeSignature() {
    if(!this.selectedNode) {
      return undefined;
    }
    return this.getNodeSignatures()[this.selectedNode];
  }

  getSelectedNodeData() {
    if(!this.selectedNode) {
      return undefined;
    }
    return libNodes[this.selectedNode];
  }

  buildNodeTree()  {
    const sigs = this.getNodeSignatures();
    const nodeTree:MenuItem[] = []
    for(const key of Object.keys(sigs)) {
      const sig = sigs[key];
      const parts = key.split('.');
      const namespace = parts[0];
      const node = parts[1];
      const foundNamespace = nodeTree.find(n => n.id === namespace);
      if(foundNamespace) {
        foundNamespace['children'].push({
          label: sig.title,
          id: key,
          Draggable: true,
          Droppable: false,
          selectable: true
        });
      } else {
        nodeTree.push({
          label: nameSpaceLabelMap[namespace],
          id: namespace,
          Draggable: false,
          Droppable: false,
          selectable: false,
          children: [
            {
              label: sig.title,
              id: key,
              Draggable: true,
              Droppable: false,
              selectable: true
            }
          ]
        });
      }
    }
    this.nodeTree = nodeTree;
  }

}
