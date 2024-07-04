import { E_NodeDataType, I_NodeSignature } from "../../core/interfaces";
import { EditorNode } from "../../core/editor-node";

export class VarDefine extends EditorNode {

    nodeHtml = 
    `<div>
        <div class='node-header'>Def Var</div>
    </div>
    `;

    exec() {
        
    }

    signature(): I_NodeSignature {
        return {
            name: 'var.define',
            title: 'Define var',
            description: 'Define a variable',
            inputs: [
                {
                    key: 'value',
                    description: 'value of variable',
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