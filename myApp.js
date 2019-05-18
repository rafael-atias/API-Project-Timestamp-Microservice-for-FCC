/**
url de la documentación relevante
https://expressjs.com/en/4x/api.html#req.params
*/

/**
 * Consumes a Datestring and returns true if it is a valid,
 * else false
 * 
 * @param {Date} date 
 */
const isValidDateString = date => {
    if (typeof date !== 'string') {
        return false;
    }

    const d = new Date(date);

    return d &&
        Object.prototype.toString.call(d) === '[object Date]' &&
        (Number.isNaN(d.getTime()) === false);
};


/**
 * Datestring - > Timestamp
 * 
 * Consumes a Datestring and produces the Timestamp
 * corresponding to the given date in path. 
 * 
 */

// examples
// getMs(CHRISTMAS) // 1545696000000

const getMs = date => {
  if (Number.isInteger(date)) {
      return date;
  }  
  
  if (isValidDateString(date)) {
        const d = new Date(date);
        return d.getTime();
  }

    return null;
};


/**
 * Timestamp -> Datestring
 * 
 * Consumes a Timestamp and produces the corresponding Datestring *
 */

const getDatestring = timestamp => new Date(timestamp).toUTCString();


// exports the functions
module.exports = {
    getMs,
    getDatestring
};