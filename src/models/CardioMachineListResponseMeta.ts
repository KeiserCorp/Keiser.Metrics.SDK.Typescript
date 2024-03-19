/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.27
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CardioMachineSorting } from './CardioMachineSorting';
import {
    CardioMachineSortingFromJSON,
    CardioMachineSortingFromJSONTyped,
    CardioMachineSortingToJSON,
} from './CardioMachineSorting';

/**
 * 
 * @export
 * @interface CardioMachineListResponseMeta
 */
export interface CardioMachineListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof CardioMachineListResponseMeta
     */
    name?: string;
    /**
     * 
     * @type {CardioMachineSorting}
     * @memberof CardioMachineListResponseMeta
     */
    sort: CardioMachineSorting;
    /**
     * 
     * @type {boolean}
     * @memberof CardioMachineListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CardioMachineListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof CardioMachineListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof CardioMachineListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the CardioMachineListResponseMeta interface.
 */
export function instanceOfCardioMachineListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function CardioMachineListResponseMetaFromJSON(json: any): CardioMachineListResponseMeta {
    return CardioMachineListResponseMetaFromJSONTyped(json, false);
}

export function CardioMachineListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardioMachineListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'sort': CardioMachineSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function CardioMachineListResponseMetaToJSON(value?: CardioMachineListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'sort': CardioMachineSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

