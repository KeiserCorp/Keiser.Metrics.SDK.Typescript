/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.12
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ApplicationSorting } from './ApplicationSorting';
import {
    ApplicationSortingFromJSON,
    ApplicationSortingFromJSONTyped,
    ApplicationSortingToJSON,
} from './ApplicationSorting';

/**
 * 
 * @export
 * @interface ApplicationListResponseMeta
 */
export interface ApplicationListResponseMeta {
    /**
     * 
     * @type {number}
     * @memberof ApplicationListResponseMeta
     */
    developmentAccountId: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationListResponseMeta
     */
    name: string;
    /**
     * 
     * @type {ApplicationSorting}
     * @memberof ApplicationListResponseMeta
     */
    sort: ApplicationSorting;
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ApplicationListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the ApplicationListResponseMeta interface.
 */
export function instanceOfApplicationListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "developmentAccountId" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function ApplicationListResponseMetaFromJSON(json: any): ApplicationListResponseMeta {
    return ApplicationListResponseMetaFromJSONTyped(json, false);
}

export function ApplicationListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'developmentAccountId': json['developmentAccountId'],
        'name': json['name'],
        'sort': ApplicationSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function ApplicationListResponseMetaToJSON(value?: ApplicationListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'developmentAccountId': value.developmentAccountId,
        'name': value.name,
        'sort': ApplicationSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

