/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DevelopmentAccountRelationshipSorting } from './DevelopmentAccountRelationshipSorting';
import {
    DevelopmentAccountRelationshipSortingFromJSON,
    DevelopmentAccountRelationshipSortingFromJSONTyped,
    DevelopmentAccountRelationshipSortingToJSON,
} from './DevelopmentAccountRelationshipSorting';

/**
 * 
 * @export
 * @interface DevelopmentAccountRelationshipListResponseMeta
 */
export interface DevelopmentAccountRelationshipListResponseMeta {
    /**
     * 
     * @type {number}
     * @memberof DevelopmentAccountRelationshipListResponseMeta
     */
    developmentAccountId: number;
    /**
     * 
     * @type {DevelopmentAccountRelationshipSorting}
     * @memberof DevelopmentAccountRelationshipListResponseMeta
     */
    sort: DevelopmentAccountRelationshipSorting;
    /**
     * 
     * @type {boolean}
     * @memberof DevelopmentAccountRelationshipListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof DevelopmentAccountRelationshipListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof DevelopmentAccountRelationshipListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof DevelopmentAccountRelationshipListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the DevelopmentAccountRelationshipListResponseMeta interface.
 */
export function instanceOfDevelopmentAccountRelationshipListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "developmentAccountId" in value;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function DevelopmentAccountRelationshipListResponseMetaFromJSON(json: any): DevelopmentAccountRelationshipListResponseMeta {
    return DevelopmentAccountRelationshipListResponseMetaFromJSONTyped(json, false);
}

export function DevelopmentAccountRelationshipListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevelopmentAccountRelationshipListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'developmentAccountId': json['developmentAccountId'],
        'sort': DevelopmentAccountRelationshipSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function DevelopmentAccountRelationshipListResponseMetaToJSON(value?: DevelopmentAccountRelationshipListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'developmentAccountId': value.developmentAccountId,
        'sort': DevelopmentAccountRelationshipSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

