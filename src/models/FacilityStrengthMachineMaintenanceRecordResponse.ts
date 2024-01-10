/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityStrengthMachineMaintenanceRecordData } from './FacilityStrengthMachineMaintenanceRecordData';
import {
    FacilityStrengthMachineMaintenanceRecordDataFromJSON,
    FacilityStrengthMachineMaintenanceRecordDataFromJSONTyped,
    FacilityStrengthMachineMaintenanceRecordDataToJSON,
} from './FacilityStrengthMachineMaintenanceRecordData';

/**
 * 
 * @export
 * @interface FacilityStrengthMachineMaintenanceRecordResponse
 */
export interface FacilityStrengthMachineMaintenanceRecordResponse {
    /**
     * 
     * @type {FacilityStrengthMachineMaintenanceRecordData}
     * @memberof FacilityStrengthMachineMaintenanceRecordResponse
     */
    facilityStrengthMachineMaintenanceRecord: FacilityStrengthMachineMaintenanceRecordData;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineMaintenanceRecordResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineMaintenanceRecordResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityStrengthMachineMaintenanceRecordResponse interface.
 */
export function instanceOfFacilityStrengthMachineMaintenanceRecordResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityStrengthMachineMaintenanceRecord" in value;

    return isInstance;
}

export function FacilityStrengthMachineMaintenanceRecordResponseFromJSON(json: any): FacilityStrengthMachineMaintenanceRecordResponse {
    return FacilityStrengthMachineMaintenanceRecordResponseFromJSONTyped(json, false);
}

export function FacilityStrengthMachineMaintenanceRecordResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityStrengthMachineMaintenanceRecordResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityStrengthMachineMaintenanceRecord': FacilityStrengthMachineMaintenanceRecordDataFromJSON(json['facilityStrengthMachineMaintenanceRecord']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityStrengthMachineMaintenanceRecordResponseToJSON(value?: FacilityStrengthMachineMaintenanceRecordResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityStrengthMachineMaintenanceRecord': FacilityStrengthMachineMaintenanceRecordDataToJSON(value.facilityStrengthMachineMaintenanceRecord),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

