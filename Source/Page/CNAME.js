
import { Outputs } from 'Paths'


const { writeTextFile } = Deno;


const address = 'ultramods.xyz';


export default async function generateCNAME (){
    await writeTextFile(Outputs.CName,address);
}
