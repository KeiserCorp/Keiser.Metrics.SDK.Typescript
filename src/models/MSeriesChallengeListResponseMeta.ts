/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.26
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MSeriesChallengeRelationship } from './MSeriesChallengeRelationship';
import {
    MSeriesChallengeRelationshipFromJSON,
    MSeriesChallengeRelationshipFromJSONTyped,
    MSeriesChallengeRelationshipToJSON,
} from './MSeriesChallengeRelationship';
import type { MSeriesChallengeSorting } from './MSeriesChallengeSorting';
import {
    MSeriesChallengeSortingFromJSON,
    MSeriesChallengeSortingFromJSONTyped,
    MSeriesChallengeSortingToJSON,
} from './MSeriesChallengeSorting';

/**
 * 
 * @export
 * @interface MSeriesChallengeListResponseMeta
 */
export interface MSeriesChallengeListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof MSeriesChallengeListResponseMeta
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesChallengeListResponseMeta
     */
    from?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesChallengeListResponseMeta
     */
    to?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MSeriesChallengeListResponseMeta
     */
    isCompleted?: boolean;
    /**
     * 
     * @type {MSeriesChallengeRelationship}
     * @memberof MSeriesChallengeListResponseMeta
     */
    relationship?: MSeriesChallengeRelationship;
    /**
     * 
     * @type {MSeriesChallengeSorting}
     * @memberof MSeriesChallengeListResponseMeta
     */
    sort: MSeriesChallengeSorting;
    /**
     * 
     * @type {boolean}
     * @memberof MSeriesChallengeListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof MSeriesChallengeListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesChallengeListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesChallengeListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the MSeriesChallengeListResponseMeta interface.
 */
export function instanceOfMSeriesChallengeListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function MSeriesChallengeListResponseMetaFromJSON(json: any): MSeriesChallengeListResponseMeta {
    return MSeriesChallengeListResponseMetaFromJSONTyped(json, false);
}

export function MSeriesChallengeListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesChallengeListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'from': !exists(json, 'from') ? undefined : json['from'],
        'to': !exists(json, 'to') ? undefined : json['to'],
        'isCompleted': !exists(json, 'isCompleted') ? undefined : json['isCompleted'],
        'relationship': !exists(json, 'relationship') ? undefined : MSeriesChallengeRelationshipFromJSON(json['relationship']),
        'sort': MSeriesChallengeSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function MSeriesChallengeListResponseMetaToJSON(value?: MSeriesChallengeListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'from': value.from,
        'to': value.to,
        'isCompleted': value.isCompleted,
        'relationship': MSeriesChallengeRelationshipToJSON(value.relationship),
        'sort': MSeriesChallengeSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

