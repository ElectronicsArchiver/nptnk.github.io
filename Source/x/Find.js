
import { walk } from 'FileSystem'


export async function findFile ( folder , pattern ){

    const options = {
        followSymlinks : false ,
        includeFiles : true ,
        includeDirs : false ,
        maxDepth : 1 ,
        match : [ pattern ]
    }

    const files = walk(folder,options);

    for await ( const file of files )
        return file
}
