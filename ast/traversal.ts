import { Node } from './parse';

function traversal(node: Node, resStr: string = ''): string {
    const { tag, attribute, text, children } = node;
    resStr += `<${tag}`;
    
    attribute && Object.keys(attribute).forEach(key=> {
        resStr +=` ${key}=${attribute[key]}`;
    });

    resStr += ` >`;

    children && children.forEach(node => {
        resStr += traversal(node);
    })

    // resStr += `${text}`;
    resStr += `</${tag}>\n`;


    return resStr;
}

export { traversal }
