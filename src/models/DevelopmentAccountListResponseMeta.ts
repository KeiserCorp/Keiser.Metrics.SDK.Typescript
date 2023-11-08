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
import type { DevelopmentAccountSorting } from './DevelopmentAccountSorting';
import {
    DevelopmentAccountSortingFromJSON,
    DevelopmentAccountSortingFromJSONTyped,
    DevelopmentAccountSortingToJSON,
} from './DevelopmentAccountSorting';

/**
 * 
 * @export
 * @interface DevelopmentAccountListResponseMeta
 */
export interface DevelopmentAccountListResponseMeta {
    /**
     * 
     * @type {DevelopmentAccountSorting}
     * @memberof DevelopmentAccountListResponseMeta
     */
    sort: DevelopmentAccountSorting;
    /**
     * 
     * @type {boolean}
     * @memberof DevelopmentAccountListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof DevelopmentAccountListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof DevelopmentAccountListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof DevelopmentAccountListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the DevelopmentAccountListResponseMeta interface.
 */
export function instanceOfDevelopmentAccountListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function DevelopmentAccountListResponseMetaFromJSON(json: any): DevelopmentAccountListResponseMeta {
    return DevelopmentAccountListResponseMetaFromJSONTyped(json, false);
}

export function DevelopmentAccountListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevelopmentAccountListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sort': DevelopmentAccountSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function DevelopmentAccountListResponseMetaToJSON(value?: DevelopmentAccountListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sort': DevelopmentAccountSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

