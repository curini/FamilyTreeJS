export interface Node {
  /**
   * id person
   * @type {number}
   */
  key: number;
  /**
   * name person
   * @type {string}
   */
  name?: string;
  /**
   * photo url link
   * @type {string}
   */
  photo?: string;
  /**
   * gender person
   * @type {string}
   */
  gender?: 'M' | 'F';
  /**
   * belongs group
   * @type {[type]}
   */
  isGroup?: boolean;
  /**
   * group parent person
   * @type {number}
   */
  group?: number;
  /**
   * spouse person
   * @type {number}
   */
  spouse?: number;
  /**
   * parent person
   * @type {string}
   */
  parent?: number;
  /**
   * mother person
   * @type {string}
   */
  mother?: number;
  /**
   * father person
   * @type {string}
   */
  father?: number;
  /**
   * birthday person
   * @type {string}
   */
  birth?: string;
  /**
   * deathday person
   * @type {string}
   */
  death?: string;
  /**
   * note person
   * @type {string}
   */
  note?: string;
  /**
   * colors person
   */
  a?: Array<string>;
  /**
   * age person
   * @type {string}
   */
  age?: string;
  /**
   * birthplace person
   * @type {string}
   */
  birthplace?: string;
  /**
   * birthcountry person
   * @type {string}
   */
  birthcountry?: string;
  /**
   * deathplace person
   * @type {string}
   */
  deathplace?: string;
  /**
   * deathcountry person
   * @type {string}
   */
  deathcountry?: string;
  /**
   * generation person
   * @type {number}
   */
  generation?: number;
}
