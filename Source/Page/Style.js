
import { Outputs , Inputs } from 'Paths'
import { minifyCSS } from 'Minify'
import { walk } from 'FileSystem'


const
    { writeTextFile , readTextFile } = Deno ,
    { log } = console ;


/**
 *  Function:
 *  1.  Searches for css files in /Data/Styles
 *  2.  Combines their content
 *  3.  Minifies the combined css
 *  4.  Saves the css to /Website/x/Style.css
 */

export default async function (){

    let combined = '';

    for await ( const { path } of findStyles() )
        combined += await readTextFile(path);


    const { styles , stats } = minifyCSS(combined);

    printStatistics(stats);

    await writeTextFile(Outputs.Style,styles);
}


const query = {
    followSymlinks : false ,
    includeFiles : true ,
    includeDirs : false ,
    maxDepth : 1
}

function findStyles (){
    return walk(Inputs.Styles,query)
}


function printStatistics ( statistics ){

    const { originalSize , minifiedSize , timeSpent } = statistics;

    log(`Minified ${ originalSize } Bytes of CSS to ${ minifiedSize } Bytes in ${ timeSpent } ms.`);
}
