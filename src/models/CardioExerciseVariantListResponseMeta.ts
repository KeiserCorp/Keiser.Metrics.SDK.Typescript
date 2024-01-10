/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.17
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CardioExerciseVariantSorting } from './CardioExerciseVariantSorting';
import {
    CardioExerciseVariantSortingFromJSON,
    CardioExerciseVariantSortingFromJSONTyped,
    CardioExerciseVariantSortingToJSON,
} from './CardioExerciseVariantSorting';

/**
 * 
 * @export
 * @interface CardioExerciseVariantListResponseMeta
 */
export interface CardioExerciseVariantListResponseMeta {
    /**
     * 
     * @type {number}
     * @memberof CardioExerciseVariantListResponseMeta
     */
    cardioExerciseId?: number;
    /**
     * 
     * @type {number}
     * @memberof CardioExerciseVariantListResponseMeta
     */
    cardioMachineId?: number;
    /**
     * 
     * @type {string}
     * @memberof CardioExerciseVariantListResponseMeta
     */
    variant?: string;
    /**
     * 
     * @type {CardioExerciseVariantSorting}
     * @memberof CardioExerciseVariantListResponseMeta
     */
    sort: CardioExerciseVariantSorting;
    /**
     * 
     * @type {boolean}
     * @memberof CardioExerciseVariantListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CardioExerciseVariantListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof CardioExerciseVariantListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof CardioExerciseVariantListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the CardioExerciseVariantListResponseMeta interface.
 */
export function instanceOfCardioExerciseVariantListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function CardioExerciseVariantListResponseMetaFromJSON(json: any): CardioExerciseVariantListResponseMeta {
    return CardioExerciseVariantListResponseMetaFromJSONTyped(json, false);
}

export function CardioExerciseVariantListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardioExerciseVariantListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cardioExerciseId': !exists(json, 'cardioExerciseId') ? undefined : json['cardioExerciseId'],
        'cardioMachineId': !exists(json, 'cardioMachineId') ? undefined : json['cardioMachineId'],
        'variant': !exists(json, 'variant') ? undefined : json['variant'],
        'sort': CardioExerciseVariantSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function CardioExerciseVariantListResponseMetaToJSON(value?: CardioExerciseVariantListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cardioExerciseId': value.cardioExerciseId,
        'cardioMachineId': value.cardioMachineId,
        'variant': value.variant,
        'sort': CardioExerciseVariantSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

