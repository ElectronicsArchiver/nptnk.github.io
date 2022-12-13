
import { Outputs , Inputs } from 'Paths'
import { ensureDir , emptyDir } from 'FileSystem'


import copyResources from './Page/Resources.js'
import generateCNAME from './Page/CNAME.js'
import generateIndex from './Page/Index.js'
import exportStyles from './Page/Style.js'


const { timeEnd , time , clear , log } = console;

clear();


time('Building');

await emptyDir(Outputs.Website);
await ensureDir(Outputs.Resources);
await ensureDir(Outputs.Mods);

await copyResources();
await exportStyles();
await generateCNAME();
await generateIndex();

timeEnd('Building');
