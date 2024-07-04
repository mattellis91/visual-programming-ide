import { EditorNode } from "../../core/editor-node";
import { E_NodeDataType, I_NodeSignature } from "../../core/interfaces";

export class VarGet extends EditorNode {

    nodeHtml = 
    `<div>
        <div class='node-header'>Get Var</div>
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
            </div>
            <div>Val</div>
        </div>
    </div>
    `;

    exec() {
        
    }

    signature(): I_NodeSignature {
        return {
            name: 'var.get',
            title: 'Get var',
            description: 'Get a variable',
            inputs: [
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