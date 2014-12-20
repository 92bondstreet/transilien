'use strict'

/**
 * Transilien Class to get traffic status
 * @class Transilien
 */

var Transilien = function() {
  this._initialize();
}

var prototype = Transilien.prototype;


/**
 * Transilien constructor
 *
 * @method _initialize
 * @param {Object} options  Class options
 * @return {Transilien} this
 */

/**
 * Options setter
 *
 * @method _setOptions
 * @param {Object} options  Class options
 * @return {Transilien} this
 */

 /**
 * Test callback function
 *
 * @method 	_checkCallback
 * @param {Function} 	callback	Function
 * @return {Boolean} callback or not
 */

/**
 * Transilien Website is it up ?
 *
 * @method _isUp
 * @return {Boolean} up or not
 */

/**
 * Lines Traffic status
 *
 * @method lignes
 * @param {Array} code  List of Lines code
 * @param {Function} callback Callback with lines result status
 * @return {Transilien} this
 */

/**
 * Call transilien url
 *
 * @method _callTransilien
 * @param {String} code	Line code
 * @param {Function} 	callback After result
 * @return {Transilien} this
 */

/**
 * Get status from html element
 *
 * @method _getStatus
 * @param {HTMLElement} dom  Dom status
 * @return {Object} status  Line status
 */
