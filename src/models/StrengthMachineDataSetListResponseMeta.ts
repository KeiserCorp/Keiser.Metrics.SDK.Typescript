/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StrengthMachineDataSetSorting } from './StrengthMachineDataSetSorting';
import {
    StrengthMachineDataSetSortingFromJSON,
    StrengthMachineDataSetSortingFromJSONTyped,
    StrengthMachineDataSetSortingToJSON,
} from './StrengthMachineDataSetSorting';

/**
 * 
 * @export
 * @interface StrengthMachineDataSetListResponseMeta
 */
export interface StrengthMachineDataSetListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineDataSetListResponseMeta
     */
    from?: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineDataSetListResponseMeta
     */
    to?: string;
    /**
     * 
     * @type {StrengthMachineDataSetSorting}
     * @memberof StrengthMachineDataSetListResponseMeta
     */
    sort: StrengthMachineDataSetSorting;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetListResponseMeta
     */
    userId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof StrengthMachineDataSetListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the StrengthMachineDataSetListResponseMeta interface.
 */
export function instanceOfStrengthMachineDataSetListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function StrengthMachineDataSetListResponseMetaFromJSON(json: any): StrengthMachineDataSetListResponseMeta {
    return StrengthMachineDataSetListResponseMetaFromJSONTyped(json, false);
}

export function StrengthMachineDataSetListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthMachineDataSetListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'from': !exists(json, 'from') ? undefined : json['from'],
        'to': !exists(json, 'to') ? undefined : json['to'],
        'sort': StrengthMachineDataSetSortingFromJSON(json['sort']),
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function StrengthMachineDataSetListResponseMetaToJSON(value?: StrengthMachineDataSetListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from': value.from,
        'to': value.to,
        'sort': StrengthMachineDataSetSortingToJSON(value.sort),
        'userId': value.userId,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

