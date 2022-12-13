
import { extname } from 'Path'


let count = 0;


export function parseMod ( data ){

    const recommended = count++ < 6;


    let { github , gitlab , name } = data;

    github &&= `https://GitHub.com/${ github }`;

    gitlab &&= `https://GitLab.com/${ gitlab }`;


    const repository = github ?? gitlab ?? '#';


    let { contributors , description , loaders } = data;

    contributors ??= 'Unknown';

    description ??= 'Missing Description';

    loaders = loaders.join(' & ');

    contributors = contributors.join('<br>');


    let { thumbnail , id } = data;

    thumbnail &&= {
        source : thumbnail ,
        file : `${ id }${ extname(thumbnail) }` ,
        link : `x/Mods/${ id }${ extname(thumbnail) }`
    }

    thumbnail ??= { link : `x/Images/Fallback.png` }


    return {
        contributors , description , thumbnail ,
        repository , loaders , name , id
    }
}
