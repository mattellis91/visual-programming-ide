import { I_NodeSignature } from "../core/interfaces";
import { EditorNode } from "../core/editor-node";
import { VarDefine } from "./var/define";
import { VarGet } from "./var/get";
import { VarIncrement } from "./var/increment";
import { VarSet } from "./var/set";
import { ListNew } from "./list/new";
import { ListAppend } from "./list/append";
import { ListGetItem } from "./list/get-item";
import { CfIf } from "./cf/if";
import { CfFor } from "./cf/for";
import { CfForEach } from "./cf/for-each";
import { CfWhile } from "./cf/while";
import { IORead } from "./io/read";
import { IOLog } from "./io/log";
import { MathAdd } from "./math/add";

export const libNodes: Record<string, EditorNode> = {
    'var.define': new VarDefine(),
    'var.set': new VarSet(),
    'var.get': new VarGet(),
    'var.increment': new VarIncrement(),
    'list.new': new ListNew(),
    'list.append': new ListAppend(),
    'list.get-item': new ListGetItem(),
    'cf.if': new CfIf(),
    'cf.for': new CfFor(),
    'cf.for-each': new CfForEach(),
    'cf.while': new CfWhile(),
    'io.read': new IORead(),
    'io.log': new IOLog(),
    'math.add': new MathAdd(),
}

export const nameSpaceLabelMap: Record<string, string> = {
    'var': 'Variables',
    'list': 'Lists',
    'cf': 'Control Flow',
    'io': 'IO',
    'math': 'Math',
    'logic': 'Logic',
    'editor': 'Editor',
}

export function getAllSignatures(): Record<string, I_NodeSignature> {
    const sigs:Record<string, I_NodeSignature> = {};
    for(const key of Object.keys(libNodes)) {
        sigs[key] = libNodes[key].signature();
    }
    return sigs;
}

/*
tree: any = [
    {
      label: 'Variables',
      draggable: false,
      Droppable: false,
      selectable: false,
      children: [
        {
          label: 'Def Var',
          key: 'var.define',
          selectable: true,
        },
        {
          label: 'Get Var',
          key: 'var.get',
          selectable: true,
        },
        {
          label: 'Set Var',
          key: 'var.set',
          selectable: true,
        },
        {
          label: 'Increment Var',
          key: 'var.increment',
          selectable: true,
        },
      ]
    },
    {
      label: 'Lists',
      draggable: false,
      Droppable: false,
      children: [
        {
          label: 'New List',
        },
        {
          label: 'Append List'
        },
        {
          label: 'Get List Item'
        },
      ]
    },
    {
      label: 'Control Flow',
      draggable: false,
      Droppable: false,
      children: [
        {
          label: 'If'
        },
        {
          label: 'While'
        },
        {
          label: 'For'
        },
        {
          label: 'For Each'
        },
      ]
    },
    {
      label: 'IO',
      draggable: false,
      Droppable: false,
      children: [
        {
          label: 'Get Input'
        },
        {
          label: 'Log'
        }
      ]
    },
    {
      label: 'Math',
      draggable: false,
      Droppable: false,
      children: [
        {
          label: 'Add'
        },
        {
          label: 'Subtract'
        },
        {
          label: 'Multiply'
        },
        {
          label: 'Divide'
        },
        {
          label: 'Modulus'
        },
        {
          label: 'Random'
        }
      ]
    },
    {
      label: 'Logic',
      draggable: false,
      Droppable: false,
      children: [
        {
          label: 'And'
        },
        {
          label: 'Or'
        },
        {
          label: 'Not'
        },
        {
          label: 'Equals'
        },
        {
          label: 'Not Equals'
        },
        {
          label: 'Greater Than'
        },
        {
          label: 'Less Than'
        },
        {
          label: 'Greater Than or Equal'
        },
        {
          label: 'Less Than or Equal'
        },
        {
          label: 'Has A Value'
        },
        {
          label: 'Does Not Have A Value'
        }
      ]
    },
    {
      label: 'Editor',
      draggable: false,
      Droppable: false,
      children: [
        {
          label: 'Group'
        },
        {
          label: 'Textbox'
        }
      ]
    }
  ]

*/