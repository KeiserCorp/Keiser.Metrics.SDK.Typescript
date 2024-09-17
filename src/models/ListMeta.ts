/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.32
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
 * @interface ListMeta
 */
export interface ListMeta {
    /**
     * 
     * @type {string}
     * @memberof ListMeta
     */
    sort: string;
    /**
     * 
     * @type {boolean}
     * @memberof ListMeta
     */
    ascending: boolean;
    /**
     * 
     * @type {number}
     * @memberof ListMeta
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof ListMeta
     */
    offset: number;
    /**
     * 
     * @type {number}
     * @memberof ListMeta
     */
    totalCount: number;
}

/**
 * Check if a given object implements the ListMeta interface.
 */
export function instanceOfListMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;
    isInstance = isInstance && "ascending" in value;
    isInstance = isInstance && "limit" in value;
    isInstance = isInstance && "offset" in value;
    isInstance = isInstance && "totalCount" in value;

    return isInstance;
}

export function ListMetaFromJSON(json: any): ListMeta {
    return ListMetaFromJSONTyped(json, false);
}

export function ListMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sort': json['sort'],
        'ascending': json['ascending'],
        'limit': json['limit'],
        'offset': json['offset'],
        'totalCount': json['totalCount'],
    };
}

export function ListMetaToJSON(value?: ListMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sort': value.sort,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

