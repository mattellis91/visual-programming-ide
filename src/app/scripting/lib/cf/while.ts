import { EditorNode } from "../../core/editor-node";
import { E_NodeDataType, I_NodeSignature } from "../../core/interfaces";

export class CfWhile extends EditorNode {

    nodeHtml = 
    `<div>
        <div class='node-header'>While</div>
    </div>
    `;

    exec() {
        
    }

    signature(): I_NodeSignature {
        return {
            name: 'cf.while',
            title: 'While Loop',
            description: 'While condition is true, do something',
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
                    key: 'do',
                    description: 'do something each iteration',
                    type: E_NodeDataType.Any,
                }
            ],
        }
    }
}