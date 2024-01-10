/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface StrengthMachineHistoryMeta
 */
export interface StrengthMachineHistoryMeta {
    /**
     * 
     * @type {Date}
     * @memberof StrengthMachineHistoryMeta
     */
    from?: Date;
    /**
     * 
     * @type {Date}
     * @memberof StrengthMachineHistoryMeta
     */
    to?: Date;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineHistoryMeta
     */
    sort?: string;
    /**
     * 
     * @type {boolean}
     * @memberof StrengthMachineHistoryMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineHistoryMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineHistoryMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineHistoryMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the StrengthMachineHistoryMeta interface.
 */
export function instanceOfStrengthMachineHistoryMeta(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StrengthMachineHistoryMetaFromJSON(json: any): StrengthMachineHistoryMeta {
    return StrengthMachineHistoryMetaFromJSONTyped(json, false);
}

export function StrengthMachineHistoryMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthMachineHistoryMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'from': !exists(json, 'from') ? undefined : (new Date(json['from'])),
        'to': !exists(json, 'to') ? undefined : (new Date(json['to'])),
        'sort': !exists(json, 'sort') ? undefined : json['sort'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function StrengthMachineHistoryMetaToJSON(value?: StrengthMachineHistoryMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from': value.from === undefined ? undefined : (value.from.toISOString()),
        'to': value.to === undefined ? undefined : (value.to.toISOString()),
        'sort': value.sort,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

