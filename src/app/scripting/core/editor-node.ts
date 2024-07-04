import { I_NodeSignature } from "./interfaces";

export abstract class EditorNode {
    abstract signature(): I_NodeSignature;
    abstract exec(): any;
    abstract nodeHtml: string;
}