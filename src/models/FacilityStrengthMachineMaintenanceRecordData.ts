/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.11
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
 * @interface FacilityStrengthMachineMaintenanceRecordData
 */
export interface FacilityStrengthMachineMaintenanceRecordData {
    /**
     * 
     * @type {number}
     * @memberof FacilityStrengthMachineMaintenanceRecordData
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof FacilityStrengthMachineMaintenanceRecordData
     */
    takenAt: Date;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineMaintenanceRecordData
     */
    log: string;
    /**
     * 
     * @type {FacilityStrengthMachineData}
     * @memberof FacilityStrengthMachineMaintenanceRecordData
     */
    facilityStrengthMachine?: FacilityStrengthMachineData;
}

/**
 * Check if a given object implements the FacilityStrengthMachineMaintenanceRecordData interface.
 */
export function instanceOfFacilityStrengthMachineMaintenanceRecordData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "takenAt" in value;
    isInstance = isInstance && "log" in value;

    return isInstance;
}

export function FacilityStrengthMachineMaintenanceRecordDataFromJSON(json: any): FacilityStrengthMachineMaintenanceRecordData {
    return FacilityStrengthMachineMaintenanceRecordDataFromJSONTyped(json, false);
}

export function FacilityStrengthMachineMaintenanceRecordDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityStrengthMachineMaintenanceRecordData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'takenAt': (new Date(json['takenAt'])),
        'log': json['log'],
        'facilityStrengthMachine': !exists(json, 'facilityStrengthMachine') ? undefined : FacilityStrengthMachineDataFromJSON(json['facilityStrengthMachine']),
    };
}

export function FacilityStrengthMachineMaintenanceRecordDataToJSON(value?: FacilityStrengthMachineMaintenanceRecordData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'takenAt': (value.takenAt.toISOString()),
        'log': value.log,
        'facilityStrengthMachine': FacilityStrengthMachineDataToJSON(value.facilityStrengthMachine),
    };
}

