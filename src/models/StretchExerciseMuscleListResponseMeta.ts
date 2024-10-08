/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.33
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
 * @interface StretchExerciseMuscleListResponseMeta
 */
export interface StretchExerciseMuscleListResponseMeta {
    /**
     * 
     * @type {number}
     * @memberof StretchExerciseMuscleListResponseMeta
     */
    stretchExerciseId?: number;
    /**
     * 
     * @type {string}
     * @memberof StretchExerciseMuscleListResponseMeta
     */
    muscle?: string;
    /**
     * 
     * @type {MuscleTargetLevel}
     * @memberof StretchExerciseMuscleListResponseMeta
     */
    targetLevel?: MuscleTargetLevel;
    /**
     * 
     * @type {MuscleSorting}
     * @memberof StretchExerciseMuscleListResponseMeta
     */
    sort: MuscleSorting;
    /**
     * 
     * @type {boolean}
     * @memberof StretchExerciseMuscleListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof StretchExerciseMuscleListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof StretchExerciseMuscleListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof StretchExerciseMuscleListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the StretchExerciseMuscleListResponseMeta interface.
 */
export function instanceOfStretchExerciseMuscleListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function StretchExerciseMuscleListResponseMetaFromJSON(json: any): StretchExerciseMuscleListResponseMeta {
    return StretchExerciseMuscleListResponseMetaFromJSONTyped(json, false);
}

export function StretchExerciseMuscleListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): StretchExerciseMuscleListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stretchExerciseId': !exists(json, 'stretchExerciseId') ? undefined : json['stretchExerciseId'],
        'muscle': !exists(json, 'muscle') ? undefined : json['muscle'],
        'targetLevel': !exists(json, 'targetLevel') ? undefined : MuscleTargetLevelFromJSON(json['targetLevel']),
        'sort': MuscleSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function StretchExerciseMuscleListResponseMetaToJSON(value?: StretchExerciseMuscleListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stretchExerciseId': value.stretchExerciseId,
        'muscle': value.muscle,
        'targetLevel': MuscleTargetLevelToJSON(value.targetLevel),
        'sort': MuscleSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

