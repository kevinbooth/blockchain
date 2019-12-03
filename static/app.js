/******************************************************************************
 *
 *   Name: blockchain
 *   Version: 1.0
 *   Author: Kevin Booth
 *   Dependencies: 
 *      savjeecoin
 *
 ******************************************************************************/


/**
 * UNH
 * @namespace
 */
var UNH = window.UNH || {};

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

};

/**
 * Invoke ready function
 */
UNH.ready(UNH.init);