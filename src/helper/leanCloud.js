import AV from 'leancloud-storage'
import {Realtime} from 'leancloud-realtime'
import key from './key.js'

AV.init({appId: key.appId, appKey: key.appKey})
const realtime = new Realtime({
    appId: key.appId,
    appKey: key.appKey,

});

AV.realtime = realtime

export default AV