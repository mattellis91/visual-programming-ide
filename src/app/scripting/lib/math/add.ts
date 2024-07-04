import { EditorNode } from "../../core/editor-node";
import { E_NodeDataType, I_NodeSignature } from "../../core/interfaces";

export class MathAdd extends EditorNode {

    nodeHtml = 
    `<div>
        <div class='node-header'>Add</div>
    </div>
    `;

    exec() {
        
    }

    signature(): I_NodeSignature {
        return {
            name: 'math.add',
            title: 'Add',
            description: 'Add two numbers',
            inputs: [
                {
                    key: 'a',
                    description: 'first number',
                    type: E_NodeDataType.Number,
                    required: true,
                },
                {
                    key: 'b',
                    description: 'second number',
                    type: E_NodeDataType.Number,
                    required: true,
                }
            ],
            outputs: [
                {
                    key: 'result',
                    description: 'result of addition',
                    type: E_NodeDataType.Number,
                }
            ],
        }
    }
}