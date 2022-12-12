

import CleanCSS from 'CleanCSS';


export function minifyCSS ( verbose ){
    return new CleanCSS()
        .minify(verbose);
}
