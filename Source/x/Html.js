
export function image ( attributes ){
    return element('img',null,attributes)
}

export function link ( ... args ){
    return element('a', ... args )
}

export function header ( ... args ){
    return element('h1', ... args )
}

export function subheader ( ... args ){
    return element('h3', ... args )
}

export function paragraph ( ... args ){
    return element('p', ... args )
}


const { entries } = Object;

function element ( type , content , attributes = {} ){

    const meta = entries(attributes)
        .map(toAssignment)
        .join(' ');

    let tag = `<${ type }`;

    if(meta.length)
        tag += ` ${ meta }`;

    tag += '>';

    if(content)
        tag += `${ content }</${ type }>`;

    return tag
}

function toAssignment ([ key , value ]){
    return `${ key } = '${ value }'`
}
