/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.34
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
 * @interface MSeriesAppSessionListResponseMeta
 */
export interface MSeriesAppSessionListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof MSeriesAppSessionListResponseMeta
     */
    from?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesAppSessionListResponseMeta
     */
    to?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesAppSessionListResponseMeta
     */
    sort?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MSeriesAppSessionListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof MSeriesAppSessionListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesAppSessionListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesAppSessionListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the MSeriesAppSessionListResponseMeta interface.
 */
export function instanceOfMSeriesAppSessionListResponseMeta(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MSeriesAppSessionListResponseMetaFromJSON(json: any): MSeriesAppSessionListResponseMeta {
    return MSeriesAppSessionListResponseMetaFromJSONTyped(json, false);
}

export function MSeriesAppSessionListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesAppSessionListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'from': !exists(json, 'from') ? undefined : json['from'],
        'to': !exists(json, 'to') ? undefined : json['to'],
        'sort': !exists(json, 'sort') ? undefined : json['sort'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function MSeriesAppSessionListResponseMetaToJSON(value?: MSeriesAppSessionListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from': value.from,
        'to': value.to,
        'sort': value.sort,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

