
import { Outputs , Inputs } from 'Paths'
import { minifyHtml } from 'Minify'
import { loadMods } from 'Mods'
import { render } from 'Card'
import { join } from 'Path'


const { writeTextFile , readTextFile } = Deno;
const { copyFile } = Deno;


/**
 *  Function:
 *  1.  Load the template ( Data/Template.html )
 *  2.  Generate the card previews
 *  3.  Insert the card html at the placeholder
 *  4.  Write the html to the index ( Website/index.html )
 */

export default async function generateIndex (){

    const
        template = await readTextFile(Inputs.Template) ,
        cards = await generateCards() ;

    const index = template
        .replace(/<!-- *Cards * -->/,cards);

    const minified = minifyHtml(index);

    await writeTextFile(Outputs.Index,minified);
}


async function generateCards (){

    let cards = '';

    for await ( const mod of loadMods() ){

        await copyAssets(mod);

        cards += render(mod);
    }

    return cards
}


async function copyAssets ( mod ){

    const { source , file } = mod.thumbnail;

    if( ! source )
        return

    const destination = join(Outputs.Mods,file);

    await copyFile(source,destination);
}
