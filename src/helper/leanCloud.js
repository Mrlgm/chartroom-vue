import AV from 'leancloud-storage'
import key from './key.js'

AV.init({ appId: key.appId, appKey: key.appKey })

export default AV