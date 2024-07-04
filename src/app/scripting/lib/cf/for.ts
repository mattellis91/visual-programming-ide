import { EditorNode } from "../../core/editor-node";
import { E_NodeDataType, I_NodeSignature } from "../../core/interfaces";

export class CfFor extends EditorNode {

    nodeHtml = 
    `<div>
        <div class='node-header'>For</div>
    </div>
    `;

    exec() {
        
    }

    signature(): I_NodeSignature {
        return {
            name: 'cf.for',
            title: 'For Loop',
            description: 'Iterate from start to end',
            inputs: [
                {
                    key: 'start',
                    description: 'start value',
                    type: E_NodeDataType.Number,
                    required: false,
                },
                {
                    key: 'end',
                    description: 'end value',
                    type: E_NodeDataType.Number,
                    required: false,
                },
                {
                    key: 'step',
                    description: 'step value',
                    type: E_NodeDataType.Number,
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