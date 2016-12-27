<template>
  <div>{{ msg }}<br>
    <h2>developer resources and tools</h2>
    <a href="https://ethereum.org/" target="_blank" class="learnLink">offical Ethereum Website</a> Ethereum browser Mist and first tutorials from the Ethereum Foundation<br>
    <a href="https://solidity.readthedocs.io/en/latest/" target="_blank" class="learnLink">Solidity Docs</a><br>
    <a href="http://ethereum.stackexchange.com" target="_blank" class="learnLink">Ethereum StackExchange</a> get answers for all your Ethereum questions<br>
    <a href="http://truffleframework.com/" target="_blank" class="learnLink">Truffe</a> development framework for Ethereum<br>
    <a href="https://infura.io/" target="_blank" class="learnLink">Infura</a> APIs to Ethereum and IPFS nodes<br>
    <a href="https://metamask.io/" target="_blank" class="learnLink">MetaMask</a> Chrome plugin to access Ethereum dApps<br>
    <a href="https://status.im/" target="_blank" class="learnLink">Status</a>Ethereum browser/messenger/wallet for mobile phones<br>
    <a href="https://www.myetherwallet.com/" target="_blank" class="learnLink">MyEtherWallet</a>client-side Ethereum online wallet<br>

    <h2>Clients and Implementations</h2>
    <a href="https://geth.ethereum.org/" target="_blank" class="learnLink">Geth Ethereum Client</a> Ethereum client developed in Go<br>
    <a href="https://ethcore.io/parity.html" target="_blank" class="learnLink">Parity Ethereum Client</a> Ethereum client developed in Rust<br>
    <a href="http://ethereumjs.github.io/" target="_blank" class="learnLink">ethereumJS</a> Javascript gateway to Ethereum<br>
    <a href="https://github.com/Nethereum/Nethereum" target="_blank" class="learnLink">Nethereum</a> .Net integration library for Ethereum<br>
    <a href="https://github.com/web3j/web3j" target="_blank" class="learnLink">web3j</a> Java and Android library for integrating with clients (nodes) on the Ethereum network<br>
    <a href="https://github.com/ethereum/pyethereum" target="_blank" class="learnLink"></a><br>
    <a href="#" target="_blank" class="learnLink"></a><br>
    <a href="#" target="_blank" class="learnLink"></a><br>


    <h2>Guides and tips:</h2>
    <a href="https://medium.com/zeppelin-blog/zeppelin-v1-0-0-4e593c505345#.bv6yubf7v" target="_blank" class="learnLink">zeppelin</a> framework to build secure smart contracts in the Solidity language<br>
    <h2>to be continued...</h2>


http://blockgeeks.com/guides/what-is-ethereum-a-step-by-step-beginners-guide/
http://blockgeeks.com/guides/smart-contracts-the-blockchain-technology-that-will-replace-lawyers/
https://medium.com/@ConsenSys/a-101-noob-intro-to-programming-smart-contracts-on-ethereum-695d15c1dab4#.tcmcvxugj
https://github.com/ethereum/wiki/wiki/JavaScript-API#contract-events
https://medium.com/metamask/developing-ethereum-dapps-with-truffle-and-metamask-aa8ad7e363ba#.5yyusxbic

https://medium.com/@ConsenSys/very-deep-dive-on-ethereum-reading-list-f5b1122e5990#.d9mtt32ic
https://learnxinyminutes.com/docs/solidity/ (dated)
https://download.slock.it/public/DAO/WhitePaper.pdf (good idea went wrong)
http://ethereum.stackexchange.com/questions/607/how-to-unit-test-smart-contracts
https://github.com/Great-Hill-Corporation/nameGame (see comments and issues:  'security' issues are in the use of 'send' or 'call'. A contract's programmer must assume that the addresses behind the destinations of a 'send' or 'call' are malicious. If there were no sends or calls in my contract, it seems most of the 'issues' would be simple to fix. Exposing the fact that 'every unknown address may be malicious' is a great take-away from this exercise.
Solidity series on Eris https://monax.io/docs/tutorials/solidity/solidity_1_the_five_types_model/
Devcon2 videos (https://www.youtube.com/channel/UCNOfzGXD_C9YMYmnefmPH0g/videos) and slides (https://ethereumfoundation.org/devcon/?page_id=14)
http://blockchainers.org/index.php/2016/11/27/ethereum-usecase-claim-and-endorse/ A generic “Claim and Endorse” Contract
http://doublenegative.com/ethereum-security-and-wallets/

http://decypher.tv/series/ethereum-development Ethereum Ðapp Development (paid)
https://academy.b9lab.com/ Certified Online Ethereum Developer Course (paid)
</div>
</template>

<script>
export default {
  name: 'learn',
  data () {
    return {
      msg: 'better formation and organization of developer resources coming soon...'
    }
  }
}
</script>
