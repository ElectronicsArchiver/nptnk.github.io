
import { Outputs , Inputs } from 'Paths'
import { copy } from 'FileSystem'


const { copyFile } = Deno;


export default async function copyResources (){

    await copyFile(Inputs.Font,Outputs.Font);

    await copy(Inputs.Images,Outputs.Images);
}
