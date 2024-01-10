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
import type { MSeriesChallengeParticipantSorting } from './MSeriesChallengeParticipantSorting';
import {
    MSeriesChallengeParticipantSortingFromJSON,
    MSeriesChallengeParticipantSortingFromJSONTyped,
    MSeriesChallengeParticipantSortingToJSON,
} from './MSeriesChallengeParticipantSorting';

/**
 * 
 * @export
 * @interface MSeriesChallengeParticipantListResponseMeta
 */
export interface MSeriesChallengeParticipantListResponseMeta {
    /**
     * 
     * @type {number}
     * @memberof MSeriesChallengeParticipantListResponseMeta
     */
    userId?: number;
    /**
     * 
     * @type {string}
     * @memberof MSeriesChallengeParticipantListResponseMeta
     */
    nameSearchQuery?: string;
    /**
     * 
     * @type {MSeriesChallengeParticipantSorting}
     * @memberof MSeriesChallengeParticipantListResponseMeta
     */
    sort: MSeriesChallengeParticipantSorting;
    /**
     * 
     * @type {boolean}
     * @memberof MSeriesChallengeParticipantListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof MSeriesChallengeParticipantListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesChallengeParticipantListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesChallengeParticipantListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the MSeriesChallengeParticipantListResponseMeta interface.
 */
export function instanceOfMSeriesChallengeParticipantListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function MSeriesChallengeParticipantListResponseMetaFromJSON(json: any): MSeriesChallengeParticipantListResponseMeta {
    return MSeriesChallengeParticipantListResponseMetaFromJSONTyped(json, false);
}

export function MSeriesChallengeParticipantListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesChallengeParticipantListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'nameSearchQuery': !exists(json, 'nameSearchQuery') ? undefined : json['nameSearchQuery'],
        'sort': MSeriesChallengeParticipantSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function MSeriesChallengeParticipantListResponseMetaToJSON(value?: MSeriesChallengeParticipantListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'nameSearchQuery': value.nameSearchQuery,
        'sort': MSeriesChallengeParticipantSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

