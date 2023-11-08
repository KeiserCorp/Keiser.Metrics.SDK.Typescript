/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.2
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
 * @interface StrengthExerciseMuscleListResponseMeta
 */
export interface StrengthExerciseMuscleListResponseMeta {
    /**
     * 
     * @type {number}
     * @memberof StrengthExerciseMuscleListResponseMeta
     */
    strengthExerciseId?: number;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseMuscleListResponseMeta
     */
    muscle?: string;
    /**
     * 
     * @type {MuscleTargetLevel}
     * @memberof StrengthExerciseMuscleListResponseMeta
     */
    targetLevel?: MuscleTargetLevel;
    /**
     * 
     * @type {MuscleSorting}
     * @memberof StrengthExerciseMuscleListResponseMeta
     */
    sort: MuscleSorting;
    /**
     * 
     * @type {boolean}
     * @memberof StrengthExerciseMuscleListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof StrengthExerciseMuscleListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthExerciseMuscleListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthExerciseMuscleListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the StrengthExerciseMuscleListResponseMeta interface.
 */
export function instanceOfStrengthExerciseMuscleListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function StrengthExerciseMuscleListResponseMetaFromJSON(json: any): StrengthExerciseMuscleListResponseMeta {
    return StrengthExerciseMuscleListResponseMetaFromJSONTyped(json, false);
}

export function StrengthExerciseMuscleListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthExerciseMuscleListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'strengthExerciseId': !exists(json, 'strengthExerciseId') ? undefined : json['strengthExerciseId'],
        'muscle': !exists(json, 'muscle') ? undefined : json['muscle'],
        'targetLevel': !exists(json, 'targetLevel') ? undefined : MuscleTargetLevelFromJSON(json['targetLevel']),
        'sort': MuscleSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function StrengthExerciseMuscleListResponseMetaToJSON(value?: StrengthExerciseMuscleListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'strengthExerciseId': value.strengthExerciseId,
        'muscle': value.muscle,
        'targetLevel': MuscleTargetLevelToJSON(value.targetLevel),
        'sort': MuscleSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

