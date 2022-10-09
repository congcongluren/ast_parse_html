import { ParseHtml, Node } from './ast/parse';
import { svg01, svg03 } from './data';

console.time('t');
const p = new ParseHtml(svg03);


let res = p.parse();
console.log(res);
console.log(Object.keys(res.attribute));


function traversal(node: Node, resStr: string = ''): string {
    const { tag, attribute, text, children } = node;
    resStr += `<${tag}`;
    
    attribute && Object.keys(attribute).forEach(key=> {
        resStr +=` ${key}=${attribute[key]}`;
    });

    resStr += ` >\n`;

    children && children.forEach(node => {
        resStr += `\t`;
        resStr += traversal(node);
    });

    resStr += `</${tag}>\n`;

    return resStr;
}

console.log(traversal(res));


console.log(window.navigator);



console.timeEnd('t');




