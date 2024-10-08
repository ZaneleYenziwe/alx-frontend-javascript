/**
 * Updates a map by setting quantity to 100 for items with initial quantity 1.
 *
 * @param {Map<String, Number>} map - Map of items with quantities.
 * @throws {Error} If argument is not a map.
 * @returns {Map<String, Number>} Updated map.
 */
export function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of map) {
    if (quantity === 1) {
      map.set(item, 100);
    }
  }

  return map;
}

