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
import type { CardioExerciseData } from './CardioExerciseData';
import {
    CardioExerciseDataFromJSON,
    CardioExerciseDataFromJSONTyped,
    CardioExerciseDataToJSON,
} from './CardioExerciseData';
import type { CardioMachineData } from './CardioMachineData';
import {
    CardioMachineDataFromJSON,
    CardioMachineDataFromJSONTyped,
    CardioMachineDataToJSON,
} from './CardioMachineData';

/**
 * 
 * @export
 * @interface SessionPlanCardioSetTemplateData
 */
export interface SessionPlanCardioSetTemplateData {
    /**
     * 
     * @type {number}
     * @memberof SessionPlanCardioSetTemplateData
     */
    duration: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanCardioSetTemplateData
     */
    distance: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanCardioSetTemplateData
     */
    caloricBurn: number;
    /**
     * 
     * @type {CardioExerciseData}
     * @memberof SessionPlanCardioSetTemplateData
     */
    cardioExercise?: CardioExerciseData;
    /**
     * 
     * @type {CardioMachineData}
     * @memberof SessionPlanCardioSetTemplateData
     */
    cardioMachine?: CardioMachineData;
}

/**
 * Check if a given object implements the SessionPlanCardioSetTemplateData interface.
 */
export function instanceOfSessionPlanCardioSetTemplateData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "distance" in value;
    isInstance = isInstance && "caloricBurn" in value;

    return isInstance;
}

export function SessionPlanCardioSetTemplateDataFromJSON(json: any): SessionPlanCardioSetTemplateData {
    return SessionPlanCardioSetTemplateDataFromJSONTyped(json, false);
}

export function SessionPlanCardioSetTemplateDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanCardioSetTemplateData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'duration': json['duration'],
        'distance': json['distance'],
        'caloricBurn': json['caloricBurn'],
        'cardioExercise': !exists(json, 'cardioExercise') ? undefined : CardioExerciseDataFromJSON(json['cardioExercise']),
        'cardioMachine': !exists(json, 'cardioMachine') ? undefined : CardioMachineDataFromJSON(json['cardioMachine']),
    };
}

export function SessionPlanCardioSetTemplateDataToJSON(value?: SessionPlanCardioSetTemplateData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'duration': value.duration,
        'distance': value.distance,
        'caloricBurn': value.caloricBurn,
        'cardioExercise': CardioExerciseDataToJSON(value.cardioExercise),
        'cardioMachine': CardioMachineDataToJSON(value.cardioMachine),
    };
}

