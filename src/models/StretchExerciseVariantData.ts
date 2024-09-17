/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.32
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ExerciseOrdinalSetAssignmentData } from './ExerciseOrdinalSetAssignmentData';
import {
    ExerciseOrdinalSetAssignmentDataFromJSON,
    ExerciseOrdinalSetAssignmentDataFromJSONTyped,
    ExerciseOrdinalSetAssignmentDataToJSON,
} from './ExerciseOrdinalSetAssignmentData';
import type { StretchExerciseData } from './StretchExerciseData';
import {
    StretchExerciseDataFromJSON,
    StretchExerciseDataFromJSONTyped,
    StretchExerciseDataToJSON,
} from './StretchExerciseData';

/**
 * 
 * @export
 * @interface StretchExerciseVariantData
 */
export interface StretchExerciseVariantData {
    /**
     * 
     * @type {number}
     * @memberof StretchExerciseVariantData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof StretchExerciseVariantData
     */
    variant: StretchExerciseVariantDataVariantEnum;
    /**
     * 
     * @type {string}
     * @memberof StretchExerciseVariantData
     */
    instructionalImage?: string;
    /**
     * 
     * @type {string}
     * @memberof StretchExerciseVariantData
     */
    instructionalVideo?: string;
    /**
     * 
     * @type {StretchExerciseData}
     * @memberof StretchExerciseVariantData
     */
    stretchExercise?: StretchExerciseData;
    /**
     * 
     * @type {Array<ExerciseOrdinalSetAssignmentData>}
     * @memberof StretchExerciseVariantData
     */
    exerciseOrdinalSetAssignments?: Array<ExerciseOrdinalSetAssignmentData>;
}


/**
 * @export
 */
export const StretchExerciseVariantDataVariantEnum = {
    Normal: 'normal'
} as const;
export type StretchExerciseVariantDataVariantEnum = typeof StretchExerciseVariantDataVariantEnum[keyof typeof StretchExerciseVariantDataVariantEnum];


/**
 * Check if a given object implements the StretchExerciseVariantData interface.
 */
export function instanceOfStretchExerciseVariantData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "variant" in value;

    return isInstance;
}

export function StretchExerciseVariantDataFromJSON(json: any): StretchExerciseVariantData {
    return StretchExerciseVariantDataFromJSONTyped(json, false);
}

export function StretchExerciseVariantDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): StretchExerciseVariantData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'variant': json['variant'],
        'instructionalImage': !exists(json, 'instructionalImage') ? undefined : json['instructionalImage'],
        'instructionalVideo': !exists(json, 'instructionalVideo') ? undefined : json['instructionalVideo'],
        'stretchExercise': !exists(json, 'stretchExercise') ? undefined : StretchExerciseDataFromJSON(json['stretchExercise']),
        'exerciseOrdinalSetAssignments': !exists(json, 'exerciseOrdinalSetAssignments') ? undefined : ((json['exerciseOrdinalSetAssignments'] as Array<any>).map(ExerciseOrdinalSetAssignmentDataFromJSON)),
    };
}

export function StretchExerciseVariantDataToJSON(value?: StretchExerciseVariantData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'variant': value.variant,
        'instructionalImage': value.instructionalImage,
        'instructionalVideo': value.instructionalVideo,
        'stretchExercise': StretchExerciseDataToJSON(value.stretchExercise),
        'exerciseOrdinalSetAssignments': value.exerciseOrdinalSetAssignments === undefined ? undefined : ((value.exerciseOrdinalSetAssignments as Array<any>).map(ExerciseOrdinalSetAssignmentDataToJSON)),
    };
}

