/******************************************************************************
 *
 *   Name: blockchain
 *   Version: 1.0
 *   Author: Kevin Booth
 *   Dependencies: 
 *      savjeecoin
 *
 ******************************************************************************/

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const {Blockchain, Transaction} = require('savjeecoin');


/**
 * UNH
 * @namespace
 */
var UNH = window.UNH || {
    key: '',
    chain: ''
};

/**
 * Checks if DOM is ready for JS to fire
 * @function
 * @param {object} _fn init function to run once DOM is ready
 */
UNH.ready = function (_fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    _fn();
  } else {
    document.addEventListener('DOMContentLoaded', _fn);
  }
};

/**
 * Fires off all functions on page load
 * @function
 */
UNH.init = function () {
    const btnGenerate = document.getElementsByClassName('ui-generate')[0];
    const btnAdd = document.getElementsByClassName('ui-add-transaction')[0];

    btnGenerate.addEventListener('click', UNH.generateToKey, false)
    btnAdd.addEventListener('click', UNH.addTransaction, false)

    UNH.setup();
};

/**
 * Fires off all functions on page load
 * @function
 */
UNH.generateToKey = function () {
    const toAddr = document.getElementsByClassName('ui-to-addr')[0];

    toAddr.value = ec.genKeyPair().getPublic('hex');
};

/**
 * Fires off all functions on page load
 * @function
 */
UNH.setup = function () {
    const fromAddr = document.getElementsByClassName('ui-from-addr')[0];

    UNH.key = ec.genKeyPair();
    console.log('Public key:', UNH.key.getPublic('hex'));
    console.log('Private key:', UNH.key.getPrivate('hex'));
    fromAddr.innerHTML = UNH.key.getPublic('hex');

    UNH.chain = new Blockchain();
    console.log(UNH.chain);
};

/**
 * Fires off all functions on page load
 * @function
 */
UNH.addTransaction = function () {
    const toAddr = document.getElementsByClassName('ui-to-addr')[0];
    const amount = parseInt(document.getElementsByClassName('ui-amount')[0]);

    const tx = new Transaction(UNH.key.getPublic('hex'), toAddr, amount);
    tx.signTransaction(UNH.key);

    UNH.chain.addTransaction(tx);

    UNH.chain.minePendingTransactions(UNH.key.getPublic('hex'));

    console.log(UNH.chain);
};

/**
 * Fires off all functions on page load
 * @function
 */
UNH.createBlock = function () {
    
};

/**
 * Invoke ready function
 */
UNH.ready(UNH.init);