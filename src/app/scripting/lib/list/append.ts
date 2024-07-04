import { EditorNode } from "../../core/editor-node";
import { E_NodeDataType, I_NodeSignature } from "../../core/interfaces";

export class ListAppend extends EditorNode {

    nodeHtml = 
    `<div>
        <div class='node-header'>New List</div>
    </div>
    `;

    exec() {
        
    }

    signature(): I_NodeSignature {
        return {
            name: 'list.apppend',
            title: 'Append To List',
            description: 'Append items to a list',
            inputs: [
                {
                    key: 'items',
                    description: 'items to include in lust',
                    type: E_NodeDataType.Any,
                    required: false,
                }
            ],
            outputs: [
                {
                    key: 'list',
                    description: 'list of items',
                    type: E_NodeDataType.Any,
                }
            ],
        }
    }
}