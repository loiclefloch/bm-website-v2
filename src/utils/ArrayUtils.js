
// @flow

import _ from 'lodash';

export default class ArrayUtils {

  static moveOnArray(array, fromIndex, toIndex) {
    const newArray = _.concat([], array)
    newArray.splice(toIndex, 0, newArray.splice(fromIndex, 1)[0]);
    return newArray
  }

  static moveUpObjectOnArray(array, object, comparator) {
    const fromIndex = _.findIndex(array, comparator);

    const size = array.length;
    const toIndex = fromIndex - 1 >= 0 ? fromIndex - 1 : size - 1;
    return ArrayUtils.moveOnArray(array, fromIndex, toIndex);
  }

  static moveDownObjectOnArray(array, object, comparator) {
    const fromIndex = _.findIndex(array, comparator);

    const size = array.length;
    const toIndex = fromIndex + 1 < size ? fromIndex + 1 : 0;
    return ArrayUtils.moveOnArray(array, fromIndex, toIndex);
  }

  static exists(array, comparator): boolean {
    const match = _.find(array, comparator);

    return !_.isUndefined(match);
  }

  static find(array, comparator): ?any {
    const match = _.find(array, comparator);

    return _.isUndefined(match) ? null : match;
  }

  static findIndex(array, comparator): number {
    const index = _.findIndex(array, comparator);

    return index;
  }

  /**
   * Update an object on the given array. If the object is not found, we add it to the array.
   *
   * @param array: The array where update the object
   * @param obj: The object to update
   * @param comparator: Can be a string that represent the key to compare, or a function.
   * see http://stackoverflow.com/questions/27641731/is-there-a-function-in-lodash-to-replace-matched-item
   */
  static updateObjectOrAdd(array, obj, comparator) {
    const newArray = _.concat([], array)
    const match = _.find(newArray, comparator);

    if (match) {
      // Find item index using indexOf+find
      const index = _.indexOf(newArray, match);

      // Replace item at index using native splice
      newArray.splice(index, 1, obj);
    } else {
      newArray.push(obj);
    }

    return newArray
  }

  /**
   * Update an object on the given array if found on the array.
   *
   * @param array: The array where update the object
   * @param obj: The object to update
   * @param comparator: Can be a string that represent the key to compare, or a function.
   * see http://stackoverflow.com/questions/27641731/is-there-a-function-in-lodash-to-replace-matched-item
   */
  static updateObject(array, obj, comparator) {
    const newArray = _.concat([], array)
    const match = _.find(newArray, comparator);

    if (match) {
      // Find item index using indexOf+find
      const index = _.indexOf(newArray, match);

      // Replace item at index using native splice
      newArray.splice(index, 1, obj);
    }

    return newArray
  }


  /**
   * Remove an object on the given array if found on the array.
   *
   * @param array: The array where remove the object
   * @param obj: The object to remove
   * @param comparator: Can be a string that represent the key to compare, or a function.
   * see http://stackoverflow.com/questions/27641731/is-there-a-function-in-lodash-to-replace-matched-item
   */
  static removeObject(array, comparator) {
    const newArray = _.concat([], array);
    const match = _.find(newArray, comparator);

    if (match) {
      // Find item index using indexOf+find
      const index = _.indexOf(newArray, match);

      // Replace item at index using native splice
      newArray.splice(index, 1);
    }

    return newArray
  }

  static removeObjectAtIndex(array, index) {
    const newArray = _.concat([], array); // new array
    if (newArray.length > index) {
      // Replace item at index using native splice
      newArray.splice(index, 1);
    }

    return newArray
  }

  static deleteObject(array, comparator) {
    return ArrayUtils.removeObject(array, comparator);
  }

  static createArrayOfNull(size) {
    return Array.apply(null, Array(size)).map(() => {
      return null;
    });
  }

  static getObjectKeys(obj) {
    const keys = [];
    Object.keys(obj).map((key) => {
      keys.push(key);
    });

    return keys;
  }

  /**
   * Add the value if it's not on the given array, otherwise remove it.
   */
  static toggleObject(array, obj, comparator) {
    const newArray = _.concat([], array);
    if (ArrayUtils.exists(newArray, obj, comparator)) {
      return ArrayUtils.deleteObject(newArray, obj, comparator);
    }

    newArray.push(obj);
    return newArray
  }
}
