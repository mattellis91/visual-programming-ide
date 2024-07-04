import { EditorNode } from "../../core/editor-node";
import { E_NodeDataType, I_NodeSignature } from "../../core/interfaces";

export class IORead extends EditorNode {

    nodeHtml = 
    `<div>
        <div class='node-header'>Read Line</div>
    </div>
    `;

    exec() {
        
    }

    signature(): I_NodeSignature {
        return {
            name: 'io.read',
            title: 'Read Line',
            description: 'Read a line from input',
            inputs: [
                {
                    key: 'prompt',
                    description: 'items to include in lust',
                    type: E_NodeDataType.Text,
                    required: false,
                }
            ],
            outputs: [
                {
                    key: 'data',
                    description: 'data read from input',
                    type: E_NodeDataType.Text,
                }
            ],
        }
    }
}