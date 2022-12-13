
import { extname } from 'Path'


export function parseMod ( data ){


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


    const { recommended = false } = data;

    return {
        contributors , description , recommended ,
        thumbnail , repository , loaders , name , id
    }
}
