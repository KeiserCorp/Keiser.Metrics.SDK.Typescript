/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.31
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DevelopmentAccountRelationshipRequestSorting } from './DevelopmentAccountRelationshipRequestSorting';
import {
    DevelopmentAccountRelationshipRequestSortingFromJSON,
    DevelopmentAccountRelationshipRequestSortingFromJSONTyped,
    DevelopmentAccountRelationshipRequestSortingToJSON,
} from './DevelopmentAccountRelationshipRequestSorting';

/**
 * 
 * @export
 * @interface DevelopmentAccountRelationshipRequestListResponseMeta
 */
export interface DevelopmentAccountRelationshipRequestListResponseMeta {
    /**
     * 
     * @type {number}
     * @memberof DevelopmentAccountRelationshipRequestListResponseMeta
     */
    developmentAccountId?: number;
    /**
     * 
     * @type {number}
     * @memberof DevelopmentAccountRelationshipRequestListResponseMeta
     */
    userId?: number;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountRelationshipRequestListResponseMeta
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountRelationshipRequestListResponseMeta
     */
    company: string;
    /**
     * 
     * @type {DevelopmentAccountRelationshipRequestSorting}
     * @memberof DevelopmentAccountRelationshipRequestListResponseMeta
     */
    sort: DevelopmentAccountRelationshipRequestSorting;
    /**
     * 
     * @type {boolean}
     * @memberof DevelopmentAccountRelationshipRequestListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof DevelopmentAccountRelationshipRequestListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof DevelopmentAccountRelationshipRequestListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof DevelopmentAccountRelationshipRequestListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the DevelopmentAccountRelationshipRequestListResponseMeta interface.
 */
export function instanceOfDevelopmentAccountRelationshipRequestListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "company" in value;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function DevelopmentAccountRelationshipRequestListResponseMetaFromJSON(json: any): DevelopmentAccountRelationshipRequestListResponseMeta {
    return DevelopmentAccountRelationshipRequestListResponseMetaFromJSONTyped(json, false);
}

export function DevelopmentAccountRelationshipRequestListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevelopmentAccountRelationshipRequestListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'developmentAccountId': !exists(json, 'developmentAccountId') ? undefined : json['developmentAccountId'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'company': json['company'],
        'sort': DevelopmentAccountRelationshipRequestSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function DevelopmentAccountRelationshipRequestListResponseMetaToJSON(value?: DevelopmentAccountRelationshipRequestListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'developmentAccountId': value.developmentAccountId,
        'userId': value.userId,
        'email': value.email,
        'company': value.company,
        'sort': DevelopmentAccountRelationshipRequestSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

