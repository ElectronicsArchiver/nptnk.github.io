

import { fromFileUrl , dirname , join } from 'Path'


const repository = join(dirname(fromFileUrl(import.meta.url)),'..','..');



const data = join(repository,'Data');

export const Inputs = {

    Template : join(data,'Template.html') ,
    Styles : join(data,'Styles') ,
    Images : join(data,'Images') ,
    Font : join(data,'Fonts','VCR.ttf') ,
    Mods : join(data,'Mods')
}


const
    Website = join(repository,'Website') ,
    Resources = join(Website,'x') ;

export const Outputs = {

    Resources , Website ,

    Images : join(Resources,'Images') ,
    Style : join(Resources,'Style.css') ,
    Index : join(Website,'index.html') ,
    CName : join(Website,'CNAME') ,
    Font : join(Resources,'VCR.ttf') ,
    Mods : join(Resources,'Mods')
}
