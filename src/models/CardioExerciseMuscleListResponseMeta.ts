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
import type { MuscleSorting } from './MuscleSorting';
import {
    MuscleSortingFromJSON,
    MuscleSortingFromJSONTyped,
    MuscleSortingToJSON,
} from './MuscleSorting';
import type { MuscleTargetLevel } from './MuscleTargetLevel';
import {
    MuscleTargetLevelFromJSON,
    MuscleTargetLevelFromJSONTyped,
    MuscleTargetLevelToJSON,
} from './MuscleTargetLevel';

/**
 * 
 * @export
 * @interface CardioExerciseMuscleListResponseMeta
 */
export interface CardioExerciseMuscleListResponseMeta {
    /**
     * 
     * @type {number}
     * @memberof CardioExerciseMuscleListResponseMeta
     */
    cardioExerciseId?: number;
    /**
     * 
     * @type {string}
     * @memberof CardioExerciseMuscleListResponseMeta
     */
    muscle?: string;
    /**
     * 
     * @type {MuscleTargetLevel}
     * @memberof CardioExerciseMuscleListResponseMeta
     */
    targetLevel?: MuscleTargetLevel;
    /**
     * 
     * @type {MuscleSorting}
     * @memberof CardioExerciseMuscleListResponseMeta
     */
    sort: MuscleSorting;
    /**
     * 
     * @type {boolean}
     * @memberof CardioExerciseMuscleListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CardioExerciseMuscleListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof CardioExerciseMuscleListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof CardioExerciseMuscleListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the CardioExerciseMuscleListResponseMeta interface.
 */
export function instanceOfCardioExerciseMuscleListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function CardioExerciseMuscleListResponseMetaFromJSON(json: any): CardioExerciseMuscleListResponseMeta {
    return CardioExerciseMuscleListResponseMetaFromJSONTyped(json, false);
}

export function CardioExerciseMuscleListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardioExerciseMuscleListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cardioExerciseId': !exists(json, 'cardioExerciseId') ? undefined : json['cardioExerciseId'],
        'muscle': !exists(json, 'muscle') ? undefined : json['muscle'],
        'targetLevel': !exists(json, 'targetLevel') ? undefined : MuscleTargetLevelFromJSON(json['targetLevel']),
        'sort': MuscleSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function CardioExerciseMuscleListResponseMetaToJSON(value?: CardioExerciseMuscleListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cardioExerciseId': value.cardioExerciseId,
        'muscle': value.muscle,
        'targetLevel': MuscleTargetLevelToJSON(value.targetLevel),
        'sort': MuscleSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

