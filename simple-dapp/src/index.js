import sayHello from './hello';
import './index.scss';
import {radixUniverse, RadixUniverse, RadixIdentityManager, RadixAccountl} from 'radixdlt';




radixUniverse.bootstrap(RadixUniverse.LOCALHOST_SINGLENODE);


const identityManager = new RadixIdentityManager()
const myIdentity = identityManager.generateSimpleIdentity()

const myAccount = myIdentity.account

myAccount.openNodeConnection()

const faucetAddress = 'JH1P8f3znbyrDj8F4RWpix7hRkgxqHjdW2fNnKpR3v6ufXnknor'

const faucetAccount = RadixAccount.fromAddress(faucetAddress, true)
console.log(faucetAccount);

document.getElementById('root').innerHTML = 'My account address: ' + myAccount.getAddress();


