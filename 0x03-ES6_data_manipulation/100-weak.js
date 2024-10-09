/**
 * Queries API and tracks endpoint usage.
 *
 * @param {Object} endpoint - API endpoint object.
 * @throws {Error} If endpoint load is high (>= 5 queries).
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

