/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.21
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StrengthExerciseVariantSorting } from './StrengthExerciseVariantSorting';
import {
    StrengthExerciseVariantSortingFromJSON,
    StrengthExerciseVariantSortingFromJSONTyped,
    StrengthExerciseVariantSortingToJSON,
} from './StrengthExerciseVariantSorting';

/**
 * 
 * @export
 * @interface StrengthExerciseVariantListResponseMeta
 */
export interface StrengthExerciseVariantListResponseMeta {
    /**
     * 
     * @type {number}
     * @memberof StrengthExerciseVariantListResponseMeta
     */
    strengthExerciseId?: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthExerciseVariantListResponseMeta
     */
    strengthMachineId?: number;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseVariantListResponseMeta
     */
    variant?: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseVariantListResponseMeta
     */
    attachment?: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseVariantListResponseMeta
     */
    equipmentMechanicalMovement?: string;
    /**
     * 
     * @type {StrengthExerciseVariantSorting}
     * @memberof StrengthExerciseVariantListResponseMeta
     */
    sort: StrengthExerciseVariantSorting;
    /**
     * 
     * @type {boolean}
     * @memberof StrengthExerciseVariantListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof StrengthExerciseVariantListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthExerciseVariantListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthExerciseVariantListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the StrengthExerciseVariantListResponseMeta interface.
 */
export function instanceOfStrengthExerciseVariantListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function StrengthExerciseVariantListResponseMetaFromJSON(json: any): StrengthExerciseVariantListResponseMeta {
    return StrengthExerciseVariantListResponseMetaFromJSONTyped(json, false);
}

export function StrengthExerciseVariantListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthExerciseVariantListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'strengthExerciseId': !exists(json, 'strengthExerciseId') ? undefined : json['strengthExerciseId'],
        'strengthMachineId': !exists(json, 'strengthMachineId') ? undefined : json['strengthMachineId'],
        'variant': !exists(json, 'variant') ? undefined : json['variant'],
        'attachment': !exists(json, 'attachment') ? undefined : json['attachment'],
        'equipmentMechanicalMovement': !exists(json, 'equipmentMechanicalMovement') ? undefined : json['equipmentMechanicalMovement'],
        'sort': StrengthExerciseVariantSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function StrengthExerciseVariantListResponseMetaToJSON(value?: StrengthExerciseVariantListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'strengthExerciseId': value.strengthExerciseId,
        'strengthMachineId': value.strengthMachineId,
        'variant': value.variant,
        'attachment': value.attachment,
        'equipmentMechanicalMovement': value.equipmentMechanicalMovement,
        'sort': StrengthExerciseVariantSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

