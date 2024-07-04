import { EditorNode } from "../../core/editor-node";
import { E_NodeDataType, I_NodeSignature } from "../../core/interfaces";

export class VarIncrement extends EditorNode {
    nodeHtml = 
    `<div>
        <div class='node-header'>Increment Var</div>
    </div>
    `;

    exec() {
        
    }

    signature(): I_NodeSignature {
        return {
            name: 'var.increment',
            title: 'Increment var',
            description: 'Increment a variable',
            inputs: [
                {
                    key: 'value',
                    description: 'value to increment by',
                    type: E_NodeDataType.Any,
                    required: false,
                }
            ],
            outputs: [
                {
                    key: 'value',
                    description: 'value of variable',
                    type: E_NodeDataType.Any,
                }
            ],
        }
    }
}