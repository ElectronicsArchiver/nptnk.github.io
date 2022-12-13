
import { Outputs , Inputs } from 'Paths'
import { walk } from 'FileSystem'

import { parseMod } from './Parse.js'
import { loadMod } from './Load.js'


const options = {
    followSymlinks : false ,
    includeFiles : false ,
    includeDirs : true ,
    maxDepth : 1 ,
    match : [ /\/Mods\/[a-z]+/i ]
}

const discover = () =>
    walk(Inputs.Mods,options);


export async function * loadMods (){
    for await ( const folder of discover() ){

        const data = await loadMod(folder.path);

        yield parseMod(data)
    }
}
