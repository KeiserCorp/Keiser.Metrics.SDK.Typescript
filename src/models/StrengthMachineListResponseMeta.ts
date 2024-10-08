/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.33
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StrengthMachineSorting } from './StrengthMachineSorting';
import {
    StrengthMachineSortingFromJSON,
    StrengthMachineSortingFromJSONTyped,
    StrengthMachineSortingToJSON,
} from './StrengthMachineSorting';

/**
 * 
 * @export
 * @interface StrengthMachineListResponseMeta
 */
export interface StrengthMachineListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineListResponseMeta
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineListResponseMeta
     */
    line?: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineListResponseMeta
     */
    variant?: string;
    /**
     * 
     * @type {StrengthMachineSorting}
     * @memberof StrengthMachineListResponseMeta
     */
    sort: StrengthMachineSorting;
    /**
     * 
     * @type {boolean}
     * @memberof StrengthMachineListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the StrengthMachineListResponseMeta interface.
 */
export function instanceOfStrengthMachineListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function StrengthMachineListResponseMetaFromJSON(json: any): StrengthMachineListResponseMeta {
    return StrengthMachineListResponseMetaFromJSONTyped(json, false);
}

export function StrengthMachineListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthMachineListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'line': !exists(json, 'line') ? undefined : json['line'],
        'variant': !exists(json, 'variant') ? undefined : json['variant'],
        'sort': StrengthMachineSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function StrengthMachineListResponseMetaToJSON(value?: StrengthMachineListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'line': value.line,
        'variant': value.variant,
        'sort': StrengthMachineSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

