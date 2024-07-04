import { EditorNode } from "../../core/editor-node";
import { E_NodeDataType, I_NodeSignature } from "../../core/interfaces";

export class CfIf extends EditorNode {

    nodeHtml = 
    `<div>
        <div class='node-header'>New List</div>
    </div>
    `;

    exec() {
        
    }

    signature(): I_NodeSignature {
        return {
            name: 'cf.if',
            title: 'If',
            description: 'If condition is true, then do something, else do something else',
            inputs: [
                {
                    key: 'condition',
                    description: 'condition to check',
                    type: E_NodeDataType.Boolean,
                    required: false,
                }
            ],
            outputs: [
                {
                    key: 'then',
                    description: 'then path',
                    type: E_NodeDataType.Void,
                },
                {
                    key: 'else',
                    description: 'else path',
                    type: E_NodeDataType.Void,
                }
            ],
        }
    }
}