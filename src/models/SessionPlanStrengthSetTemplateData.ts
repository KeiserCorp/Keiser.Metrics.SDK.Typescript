/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StrengthExerciseData } from './StrengthExerciseData';
import {
    StrengthExerciseDataFromJSON,
    StrengthExerciseDataFromJSONTyped,
    StrengthExerciseDataToJSON,
} from './StrengthExerciseData';
import type { StrengthMachineData } from './StrengthMachineData';
import {
    StrengthMachineDataFromJSON,
    StrengthMachineDataFromJSONTyped,
    StrengthMachineDataToJSON,
} from './StrengthMachineData';

/**
 * 
 * @export
 * @interface SessionPlanStrengthSetTemplateData
 */
export interface SessionPlanStrengthSetTemplateData {
    /**
     * 
     * @type {number}
     * @memberof SessionPlanStrengthSetTemplateData
     */
    repetitionCount: number;
    /**
     * 
     * @type {StrengthExerciseData}
     * @memberof SessionPlanStrengthSetTemplateData
     */
    strengthExercise?: StrengthExerciseData;
    /**
     * 
     * @type {StrengthMachineData}
     * @memberof SessionPlanStrengthSetTemplateData
     */
    strengthMachine?: StrengthMachineData;
}

/**
 * Check if a given object implements the SessionPlanStrengthSetTemplateData interface.
 */
export function instanceOfSessionPlanStrengthSetTemplateData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "repetitionCount" in value;

    return isInstance;
}

export function SessionPlanStrengthSetTemplateDataFromJSON(json: any): SessionPlanStrengthSetTemplateData {
    return SessionPlanStrengthSetTemplateDataFromJSONTyped(json, false);
}

export function SessionPlanStrengthSetTemplateDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanStrengthSetTemplateData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'repetitionCount': json['repetitionCount'],
        'strengthExercise': !exists(json, 'strengthExercise') ? undefined : StrengthExerciseDataFromJSON(json['strengthExercise']),
        'strengthMachine': !exists(json, 'strengthMachine') ? undefined : StrengthMachineDataFromJSON(json['strengthMachine']),
    };
}

export function SessionPlanStrengthSetTemplateDataToJSON(value?: SessionPlanStrengthSetTemplateData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'repetitionCount': value.repetitionCount,
        'strengthExercise': StrengthExerciseDataToJSON(value.strengthExercise),
        'strengthMachine': StrengthMachineDataToJSON(value.strengthMachine),
    };
}

