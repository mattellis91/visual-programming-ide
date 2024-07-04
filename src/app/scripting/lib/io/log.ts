import { EditorNode } from "../../core/editor-node";
import { E_NodeDataType, I_NodeSignature } from "../../core/interfaces";

export class IOLog extends EditorNode {

    nodeHtml = 
    `<div>
        <div class='node-header'>Log</div>
    </div>
    `;

    exec() {
        
    }

    signature(): I_NodeSignature {
        return {
            name: 'io.log',
            title: 'Log',
            description: 'Logs a message to the console',
            inputs: [
                {
                    key: 'message',
                    description: 'message to log',
                    type: E_NodeDataType.Text,
                    required: false,
                }
            ],
            outputs: [
            ],
        }
    }
}