import { E_NodeDataType, I_NodeSignature } from "../../core/interfaces";
import { EditorNode } from "../../core/editor-node";

export class VarSet extends EditorNode {
    nodeHtml = 
    `<div>
        <div class='node-header'>Set Var</div>
        <div class='node-body'>
            <div>
                <div class='node-field var-select'>
                    <span>Var</span>
                    <select name='vars'>
                        <option value="volvo">Var 1</option>
                        <option value="saab">Var 2</option>
                        <option value="mercedes">Var 3</option>
                        <option value="audi">Var 4</option>
                    </select>
                </div>
                <div class='node-field var-val'>
                    <span>Val</span>
                    <input type='text' />
                </div>
            </div>
            <div>Val</div>
        </div>
    </div>
    `;

    exec() {
        
    }

    signature(): I_NodeSignature {
        return {
            name: 'var.set',
            title: 'Set var',
            description: 'Set a variable',
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