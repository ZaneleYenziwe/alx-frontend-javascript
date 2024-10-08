/**
 * Returns a string of set values that start with a specific string.
 *
 * @param {Set<String>} set - Set of strings.
 * @param {String} startString - Prefix string.
 * @returns {String} Concatenated string of matching values.
*'author ZaneleYenziwe <https://github.com/ZaneleYenziwe/alx-frontend-javascript.git>
 */
export function cleanSet(set, startString) {
  return Array.from(set)
    .filter(value => value.startsWith(startString))
    .map(value => value.slice(startString.length))
    .join('-');
}


