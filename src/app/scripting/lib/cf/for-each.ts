import { EditorNode } from "../../core/editor-node";
import { E_NodeDataType, I_NodeSignature } from "../../core/interfaces";

export class CfForEach extends EditorNode {

    nodeHtml = 
    `<div>
        <div class='node-header'>For Each</div>
    </div>
    `;

    exec() {
        
    }

    signature(): I_NodeSignature {
        return {
            name: 'cf.for-each',
            title: 'For Each Loop',
            description: 'Iterate over a list of items',
            inputs: [],
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