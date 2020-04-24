import './polyfills';

import {Naja} from './Naja';
import {AbortExtension} from './extensions/AbortExtension';
import {UniqueExtension} from './extensions/UniqueExtension';


const naja = new Naja();
naja.registerExtension(new AbortExtension());
naja.registerExtension(new UniqueExtension());

export {HttpError} from './Naja';
export default naja;
