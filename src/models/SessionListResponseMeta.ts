/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.25
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SessionSorting } from './SessionSorting';
import {
    SessionSortingFromJSON,
    SessionSortingFromJSONTyped,
    SessionSortingToJSON,
} from './SessionSorting';

/**
 * 
 * @export
 * @interface SessionListResponseMeta
 */
export interface SessionListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof SessionListResponseMeta
     */
    from?: string;
    /**
     * 
     * @type {string}
     * @memberof SessionListResponseMeta
     */
    to?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SessionListResponseMeta
     */
    open?: boolean;
    /**
     * 
     * @type {SessionSorting}
     * @memberof SessionListResponseMeta
     */
    sort: SessionSorting;
    /**
     * 
     * @type {number}
     * @memberof SessionListResponseMeta
     */
    userId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SessionListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SessionListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof SessionListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof SessionListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the SessionListResponseMeta interface.
 */
export function instanceOfSessionListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function SessionListResponseMetaFromJSON(json: any): SessionListResponseMeta {
    return SessionListResponseMetaFromJSONTyped(json, false);
}

export function SessionListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'from': !exists(json, 'from') ? undefined : json['from'],
        'to': !exists(json, 'to') ? undefined : json['to'],
        'open': !exists(json, 'open') ? undefined : json['open'],
        'sort': SessionSortingFromJSON(json['sort']),
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function SessionListResponseMetaToJSON(value?: SessionListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from': value.from,
        'to': value.to,
        'open': value.open,
        'sort': SessionSortingToJSON(value.sort),
        'userId': value.userId,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

