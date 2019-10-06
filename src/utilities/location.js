/**
 * Функція яка повертає значення із браузерної строки по заданому ключу або null, якщо такого значення не існує
 * @param {string} key - ключ за яким буде відбуватися пошук
 * @returns {string|null} 
 */

export function getSearchValueByKey(key) {
  const search = window.location.search;

  if (search !== '') {
    const searchData = search.replace('?', '');
    const searchPairs = searchData.split('&');
    for (let searchItem of searchPairs) {
      const pair = searchItem.split('=');
      if (pair[0] === key) {
        return pair[1];
      }
    }
  }

  return null;
}