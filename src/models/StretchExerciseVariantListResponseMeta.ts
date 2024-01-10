/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.18
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StretchExerciseVariantSorting } from './StretchExerciseVariantSorting';
import {
    StretchExerciseVariantSortingFromJSON,
    StretchExerciseVariantSortingFromJSONTyped,
    StretchExerciseVariantSortingToJSON,
} from './StretchExerciseVariantSorting';

/**
 * 
 * @export
 * @interface StretchExerciseVariantListResponseMeta
 */
export interface StretchExerciseVariantListResponseMeta {
    /**
     * 
     * @type {number}
     * @memberof StretchExerciseVariantListResponseMeta
     */
    stretchExerciseId?: number;
    /**
     * 
     * @type {number}
     * @memberof StretchExerciseVariantListResponseMeta
     */
    stretchMachineId?: number;
    /**
     * 
     * @type {string}
     * @memberof StretchExerciseVariantListResponseMeta
     */
    variant?: string;
    /**
     * 
     * @type {StretchExerciseVariantSorting}
     * @memberof StretchExerciseVariantListResponseMeta
     */
    sort: StretchExerciseVariantSorting;
    /**
     * 
     * @type {boolean}
     * @memberof StretchExerciseVariantListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof StretchExerciseVariantListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof StretchExerciseVariantListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof StretchExerciseVariantListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the StretchExerciseVariantListResponseMeta interface.
 */
export function instanceOfStretchExerciseVariantListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function StretchExerciseVariantListResponseMetaFromJSON(json: any): StretchExerciseVariantListResponseMeta {
    return StretchExerciseVariantListResponseMetaFromJSONTyped(json, false);
}

export function StretchExerciseVariantListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): StretchExerciseVariantListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stretchExerciseId': !exists(json, 'stretchExerciseId') ? undefined : json['stretchExerciseId'],
        'stretchMachineId': !exists(json, 'stretchMachineId') ? undefined : json['stretchMachineId'],
        'variant': !exists(json, 'variant') ? undefined : json['variant'],
        'sort': StretchExerciseVariantSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function StretchExerciseVariantListResponseMetaToJSON(value?: StretchExerciseVariantListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stretchExerciseId': value.stretchExerciseId,
        'stretchMachineId': value.stretchMachineId,
        'variant': value.variant,
        'sort': StretchExerciseVariantSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

