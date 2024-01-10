/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.24
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StrengthExerciseCategory } from './StrengthExerciseCategory';
import {
    StrengthExerciseCategoryFromJSON,
    StrengthExerciseCategoryFromJSONTyped,
    StrengthExerciseCategoryToJSON,
} from './StrengthExerciseCategory';
import type { StrengthExerciseMovement } from './StrengthExerciseMovement';
import {
    StrengthExerciseMovementFromJSON,
    StrengthExerciseMovementFromJSONTyped,
    StrengthExerciseMovementToJSON,
} from './StrengthExerciseMovement';
import type { StrengthExerciseMovementDEP } from './StrengthExerciseMovementDEP';
import {
    StrengthExerciseMovementDEPFromJSON,
    StrengthExerciseMovementDEPFromJSONTyped,
    StrengthExerciseMovementDEPToJSON,
} from './StrengthExerciseMovementDEP';
import type { StrengthExercisePlane } from './StrengthExercisePlane';
import {
    StrengthExercisePlaneFromJSON,
    StrengthExercisePlaneFromJSONTyped,
    StrengthExercisePlaneToJSON,
} from './StrengthExercisePlane';
import type { StrengthExerciseSorting } from './StrengthExerciseSorting';
import {
    StrengthExerciseSortingFromJSON,
    StrengthExerciseSortingFromJSONTyped,
    StrengthExerciseSortingToJSON,
} from './StrengthExerciseSorting';

/**
 * 
 * @export
 * @interface StrengthExerciseListResponseMeta
 */
export interface StrengthExerciseListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseListResponseMeta
     */
    defaultAlias?: string;
    /**
     * 
     * @type {StrengthExerciseCategory}
     * @memberof StrengthExerciseListResponseMeta
     */
    category?: StrengthExerciseCategory;
    /**
     * 
     * @type {StrengthExerciseMovementDEP}
     * @memberof StrengthExerciseListResponseMeta
     */
    movement?: StrengthExerciseMovementDEP;
    /**
     * 
     * @type {StrengthExerciseMovement}
     * @memberof StrengthExerciseListResponseMeta
     */
    humanMovement: StrengthExerciseMovement;
    /**
     * 
     * @type {StrengthExercisePlane}
     * @memberof StrengthExerciseListResponseMeta
     */
    plane?: StrengthExercisePlane;
    /**
     * 
     * @type {StrengthExerciseSorting}
     * @memberof StrengthExerciseListResponseMeta
     */
    sort: StrengthExerciseSorting;
    /**
     * 
     * @type {boolean}
     * @memberof StrengthExerciseListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof StrengthExerciseListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthExerciseListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthExerciseListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the StrengthExerciseListResponseMeta interface.
 */
export function instanceOfStrengthExerciseListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "humanMovement" in value;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function StrengthExerciseListResponseMetaFromJSON(json: any): StrengthExerciseListResponseMeta {
    return StrengthExerciseListResponseMetaFromJSONTyped(json, false);
}

export function StrengthExerciseListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthExerciseListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultAlias': !exists(json, 'defaultAlias') ? undefined : json['defaultAlias'],
        'category': !exists(json, 'category') ? undefined : StrengthExerciseCategoryFromJSON(json['category']),
        'movement': !exists(json, 'movement') ? undefined : StrengthExerciseMovementDEPFromJSON(json['movement']),
        'humanMovement': StrengthExerciseMovementFromJSON(json['humanMovement']),
        'plane': !exists(json, 'plane') ? undefined : StrengthExercisePlaneFromJSON(json['plane']),
        'sort': StrengthExerciseSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function StrengthExerciseListResponseMetaToJSON(value?: StrengthExerciseListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultAlias': value.defaultAlias,
        'category': StrengthExerciseCategoryToJSON(value.category),
        'movement': StrengthExerciseMovementDEPToJSON(value.movement),
        'humanMovement': StrengthExerciseMovementToJSON(value.humanMovement),
        'plane': StrengthExercisePlaneToJSON(value.plane),
        'sort': StrengthExerciseSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

