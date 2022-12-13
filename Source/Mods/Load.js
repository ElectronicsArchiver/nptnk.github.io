
import { basename , join } from 'Path'
import { findFile } from 'Find'
import { parse } from 'YAML'
import { walk } from 'FileSystem'


const { readTextFile } = Deno;


export async function loadMod ( folder ){

    const manifest = await loadManifest(folder);

    manifest.thumbnail =
        await findThumbnail(folder);

    manifest.name =
        basename(folder);

    return manifest
}


const isThumbnail = /\Thumbnail\.[a-z]+$/;

async function findThumbnail ( folder ){

    const file = await findFile(folder,isThumbnail);

    return file?.path
}


async function loadManifest ( folder ){

    const missingManifest = ( error ) => {
        throw `Couldn't find manifest ( Mod.yaml ) file for mod: ${ basename(folder) }`
    }

    const path = join(folder,'Mod.yaml');

    const yaml = await readTextFile(path)
        .catch(missingManifest);

    return parse(yaml)
}
