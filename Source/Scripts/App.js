
async function fetchJSON ( url ){
    return await fetch(url)
        .then((response) => response.json());
}


const { clear , log } = console;
const { isArray } = Array;

clear();


const div = ( html ) =>
    `<div>${ html }</div>`


const mods = await fetchJSON('./Data/Mods.json');


const cards = document.getElementById('Cards');

const addCard = (preview) =>
    cards.innerHTML += preview;

mods
.map(toCard)
.map(toPreview)
.forEach(addCard);




function toCard ( mod , index ){

    const recommended = index < 6;


    let { github , gitlab , name } = mod;

    github &&= `https://GitHub.com/${ github }`;

    gitlab &&= `https://GitLab.com/${ gitlab }`;


    const repository = github ?? gitlab ?? '#';


    let { contributors , description , loaders } = mod;

    contributors ??= 'Unknown';

    description ??= 'Missing Description';

    if(isArray(loaders))
        loaders = loaders.join(' & ');

    if(isArray(contributors))
        contributors = contributors.join('<br>');


    let { thumbnail } = mod;

    thumbnail = `Images/Mods/${ name }.${ thumbnail ?? 'png' }`;


    return {
        contributors , description , thumbnail ,
        repository , loaders , name
    }
}





function toPreview ( card ){

    const { contributors , description , thumbnail , loaders , name } = card;

    const fallback = `
        this.onerror = null;
        this.src = "Images/Fallback.png"
    `

    const sections = [
        `<img src = '${ thumbnail }' onerror = '${ fallback }'>` ,
        `<h3>${ name }</h3>` ,
        `<p>${ contributors }</p>` ,
        `<p class = Description>${ description }</p>` ,
        `<p>${ loaders }</p>`
    ]

    const content = sections
        .join('');


    const { repository } = card;

    return `
        <a class = Card target = _blank href = '${ repository }'>
            ${ content }
        </a>
    `
}
