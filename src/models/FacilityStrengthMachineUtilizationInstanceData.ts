/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.17
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityStrengthMachineData } from './FacilityStrengthMachineData';
import {
    FacilityStrengthMachineDataFromJSON,
    FacilityStrengthMachineDataFromJSONTyped,
    FacilityStrengthMachineDataToJSON,
} from './FacilityStrengthMachineData';

/**
 * 
 * @export
 * @interface FacilityStrengthMachineUtilizationInstanceData
 */
export interface FacilityStrengthMachineUtilizationInstanceData {
    /**
     * 
     * @type {number}
     * @memberof FacilityStrengthMachineUtilizationInstanceData
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof FacilityStrengthMachineUtilizationInstanceData
     */
    takenAt: Date;
    /**
     * 
     * @type {number}
     * @memberof FacilityStrengthMachineUtilizationInstanceData
     */
    repetitionCount: number;
    /**
     * 
     * @type {FacilityStrengthMachineData}
     * @memberof FacilityStrengthMachineUtilizationInstanceData
     */
    facilityStrengthMachine?: FacilityStrengthMachineData;
}

/**
 * Check if a given object implements the FacilityStrengthMachineUtilizationInstanceData interface.
 */
export function instanceOfFacilityStrengthMachineUtilizationInstanceData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "takenAt" in value;
    isInstance = isInstance && "repetitionCount" in value;

    return isInstance;
}

export function FacilityStrengthMachineUtilizationInstanceDataFromJSON(json: any): FacilityStrengthMachineUtilizationInstanceData {
    return FacilityStrengthMachineUtilizationInstanceDataFromJSONTyped(json, false);
}

export function FacilityStrengthMachineUtilizationInstanceDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityStrengthMachineUtilizationInstanceData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'takenAt': (new Date(json['takenAt'])),
        'repetitionCount': json['repetitionCount'],
        'facilityStrengthMachine': !exists(json, 'facilityStrengthMachine') ? undefined : FacilityStrengthMachineDataFromJSON(json['facilityStrengthMachine']),
    };
}

export function FacilityStrengthMachineUtilizationInstanceDataToJSON(value?: FacilityStrengthMachineUtilizationInstanceData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'takenAt': (value.takenAt.toISOString()),
        'repetitionCount': value.repetitionCount,
        'facilityStrengthMachine': FacilityStrengthMachineDataToJSON(value.facilityStrengthMachine),
    };
}

