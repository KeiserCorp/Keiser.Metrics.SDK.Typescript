/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CardioExerciseVariantData } from './CardioExerciseVariantData';
import {
    CardioExerciseVariantDataFromJSON,
    CardioExerciseVariantDataFromJSONTyped,
    CardioExerciseVariantDataToJSON,
} from './CardioExerciseVariantData';
import type { CardioMachineData } from './CardioMachineData';
import {
    CardioMachineDataFromJSON,
    CardioMachineDataFromJSONTyped,
    CardioMachineDataToJSON,
} from './CardioMachineData';
import type { ExerciseAliasData } from './ExerciseAliasData';
import {
    ExerciseAliasDataFromJSON,
    ExerciseAliasDataFromJSONTyped,
    ExerciseAliasDataToJSON,
} from './ExerciseAliasData';
import type { MuscleData } from './MuscleData';
import {
    MuscleDataFromJSON,
    MuscleDataFromJSONTyped,
    MuscleDataToJSON,
} from './MuscleData';

/**
 * 
 * @export
 * @interface CardioExerciseData
 */
export interface CardioExerciseData {
    /**
     * 
     * @type {number}
     * @memberof CardioExerciseData
     */
    id: number;
    /**
     * 
     * @type {ExerciseAliasData}
     * @memberof CardioExerciseData
     */
    defaultExerciseAlias?: ExerciseAliasData;
    /**
     * 
     * @type {Array<ExerciseAliasData>}
     * @memberof CardioExerciseData
     */
    exerciseAliases?: Array<ExerciseAliasData>;
    /**
     * 
     * @type {Array<CardioExerciseVariantData>}
     * @memberof CardioExerciseData
     */
    cardioExerciseVariants?: Array<CardioExerciseVariantData>;
    /**
     * 
     * @type {Array<MuscleData>}
     * @memberof CardioExerciseData
     */
    cardioExerciseMuscles?: Array<MuscleData>;
    /**
     * 
     * @type {Array<CardioMachineData>}
     * @memberof CardioExerciseData
     */
    cardioMachines?: Array<CardioMachineData>;
}

/**
 * Check if a given object implements the CardioExerciseData interface.
 */
export function instanceOfCardioExerciseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function CardioExerciseDataFromJSON(json: any): CardioExerciseData {
    return CardioExerciseDataFromJSONTyped(json, false);
}

export function CardioExerciseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardioExerciseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'defaultExerciseAlias': !exists(json, 'defaultExerciseAlias') ? undefined : ExerciseAliasDataFromJSON(json['defaultExerciseAlias']),
        'exerciseAliases': !exists(json, 'exerciseAliases') ? undefined : ((json['exerciseAliases'] as Array<any>).map(ExerciseAliasDataFromJSON)),
        'cardioExerciseVariants': !exists(json, 'cardioExerciseVariants') ? undefined : ((json['cardioExerciseVariants'] as Array<any>).map(CardioExerciseVariantDataFromJSON)),
        'cardioExerciseMuscles': !exists(json, 'cardioExerciseMuscles') ? undefined : ((json['cardioExerciseMuscles'] as Array<any>).map(MuscleDataFromJSON)),
        'cardioMachines': !exists(json, 'cardioMachines') ? undefined : ((json['cardioMachines'] as Array<any>).map(CardioMachineDataFromJSON)),
    };
}

export function CardioExerciseDataToJSON(value?: CardioExerciseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'defaultExerciseAlias': ExerciseAliasDataToJSON(value.defaultExerciseAlias),
        'exerciseAliases': value.exerciseAliases === undefined ? undefined : ((value.exerciseAliases as Array<any>).map(ExerciseAliasDataToJSON)),
        'cardioExerciseVariants': value.cardioExerciseVariants === undefined ? undefined : ((value.cardioExerciseVariants as Array<any>).map(CardioExerciseVariantDataToJSON)),
        'cardioExerciseMuscles': value.cardioExerciseMuscles === undefined ? undefined : ((value.cardioExerciseMuscles as Array<any>).map(MuscleDataToJSON)),
        'cardioMachines': value.cardioMachines === undefined ? undefined : ((value.cardioMachines as Array<any>).map(CardioMachineDataToJSON)),
    };
}

