
export enum E_NodeDataType {
    Text = "Text",
    Number = "Number",
    Boolean = "Boolean",
    Void = "Void",
	Any = "Any",
}

export interface I_NodeSignature {
	name: string,
	title: string,
	description: string,
	inputs: I_NodeInput[],
    outputs: I_NodeOutput[],
	deprecated?:boolean
}

export interface I_NodeInput {
	key: string,
	description: string,
	type: E_NodeDataType,
	required?:boolean
}

export interface I_NodeOutput {
    key: string,
	description: string,
	type: E_NodeDataType,
}

export interface INode {
	
}