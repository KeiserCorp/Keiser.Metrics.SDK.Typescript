/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ExerciseAliasSorting } from './ExerciseAliasSorting';
import {
    ExerciseAliasSortingFromJSON,
    ExerciseAliasSortingFromJSONTyped,
    ExerciseAliasSortingToJSON,
} from './ExerciseAliasSorting';

/**
 * 
 * @export
 * @interface ExerciseAliasListResponseMeta
 */
export interface ExerciseAliasListResponseMeta {
    /**
     * 
     * @type {number}
     * @memberof ExerciseAliasListResponseMeta
     */
    strengthExerciseId?: number;
    /**
     * 
     * @type {number}
     * @memberof ExerciseAliasListResponseMeta
     */
    cardioExerciseId?: number;
    /**
     * 
     * @type {number}
     * @memberof ExerciseAliasListResponseMeta
     */
    stretchExerciseId?: number;
    /**
     * 
     * @type {string}
     * @memberof ExerciseAliasListResponseMeta
     */
    alias?: string;
    /**
     * 
     * @type {string}
     * @memberof ExerciseAliasListResponseMeta
     */
    type?: ExerciseAliasListResponseMetaTypeEnum;
    /**
     * 
     * @type {ExerciseAliasSorting}
     * @memberof ExerciseAliasListResponseMeta
     */
    sort: ExerciseAliasSorting;
    /**
     * 
     * @type {boolean}
     * @memberof ExerciseAliasListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ExerciseAliasListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ExerciseAliasListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof ExerciseAliasListResponseMeta
     */
    totalCount?: number;
}


/**
 * @export
 */
export const ExerciseAliasListResponseMetaTypeEnum = {
    Strength: 'strength',
    Stretch: 'stretch',
    Cardio: 'cardio'
} as const;
export type ExerciseAliasListResponseMetaTypeEnum = typeof ExerciseAliasListResponseMetaTypeEnum[keyof typeof ExerciseAliasListResponseMetaTypeEnum];


/**
 * Check if a given object implements the ExerciseAliasListResponseMeta interface.
 */
export function instanceOfExerciseAliasListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function ExerciseAliasListResponseMetaFromJSON(json: any): ExerciseAliasListResponseMeta {
    return ExerciseAliasListResponseMetaFromJSONTyped(json, false);
}

export function ExerciseAliasListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExerciseAliasListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'strengthExerciseId': !exists(json, 'strengthExerciseId') ? undefined : json['strengthExerciseId'],
        'cardioExerciseId': !exists(json, 'cardioExerciseId') ? undefined : json['cardioExerciseId'],
        'stretchExerciseId': !exists(json, 'stretchExerciseId') ? undefined : json['stretchExerciseId'],
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'sort': ExerciseAliasSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function ExerciseAliasListResponseMetaToJSON(value?: ExerciseAliasListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'strengthExerciseId': value.strengthExerciseId,
        'cardioExerciseId': value.cardioExerciseId,
        'stretchExerciseId': value.stretchExerciseId,
        'alias': value.alias,
        'type': value.type,
        'sort': ExerciseAliasSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

