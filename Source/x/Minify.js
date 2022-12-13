


import CleanCSS from 'CleanCSS';


export function minifyCSS ( verbose ){
    return new CleanCSS()
        .minify(verbose)
}


import { minify } from 'HtmlMinifier'


const config = {
    removeAttributeQuotes : true ,
    quoteCharacter : "'" ,
    removeComments : true ,
    collapseWhitespace : true

}

export function minifyHtml ( verbose ){
    return minify(verbose,config)
}
