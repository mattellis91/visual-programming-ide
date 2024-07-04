import { EditorNode } from "../../core/editor-node";
import { E_NodeDataType, I_NodeSignature } from "../../core/interfaces";

export class ListGetItem extends EditorNode {

    nodeHtml = 
    `<div>
        <div class='node-header'>Get List Item</div>
    </div>
    `;

    exec() {
        
    }

    signature(): I_NodeSignature {
        return {
            name: 'list.get-item',
            title: 'Get List Item',
            description: 'Get Item From List',
            inputs: [
                {
                    key: 'index',
                    description: 'index of item to get',
                    type: E_NodeDataType.Number,
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