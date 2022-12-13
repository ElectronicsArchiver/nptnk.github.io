
import { paragraph , subheader , header , image , link } from 'Html'


export function render ( mod ){

    const { contributors , description , thumbnail , loaders , name } = mod;


    const sections = [
        image({ src : thumbnail.link }) ,
        subheader(name) ,
        paragraph(contributors) ,
        paragraph(description,{ class : 'Description' }) ,
        paragraph(loaders)
    ]

    const content = sections
        .join('');

    const { recommended , repository } = mod;

    return link(content,{
        class : 'Card ' + ( recommended ? 'Recommended' : '' ) ,
        target : '_blank' ,
        href : repository
    })
}
