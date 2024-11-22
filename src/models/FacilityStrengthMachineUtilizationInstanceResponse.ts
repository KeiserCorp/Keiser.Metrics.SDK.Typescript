/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.34
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityStrengthMachineUtilizationInstanceData } from './FacilityStrengthMachineUtilizationInstanceData';
import {
    FacilityStrengthMachineUtilizationInstanceDataFromJSON,
    FacilityStrengthMachineUtilizationInstanceDataFromJSONTyped,
    FacilityStrengthMachineUtilizationInstanceDataToJSON,
} from './FacilityStrengthMachineUtilizationInstanceData';

/**
 * 
 * @export
 * @interface FacilityStrengthMachineUtilizationInstanceResponse
 */
export interface FacilityStrengthMachineUtilizationInstanceResponse {
    /**
     * 
     * @type {FacilityStrengthMachineUtilizationInstanceData}
     * @memberof FacilityStrengthMachineUtilizationInstanceResponse
     */
    facilityStrengthMachineUtilizationInstance: FacilityStrengthMachineUtilizationInstanceData;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineUtilizationInstanceResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineUtilizationInstanceResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityStrengthMachineUtilizationInstanceResponse interface.
 */
export function instanceOfFacilityStrengthMachineUtilizationInstanceResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityStrengthMachineUtilizationInstance" in value;

    return isInstance;
}

export function FacilityStrengthMachineUtilizationInstanceResponseFromJSON(json: any): FacilityStrengthMachineUtilizationInstanceResponse {
    return FacilityStrengthMachineUtilizationInstanceResponseFromJSONTyped(json, false);
}

export function FacilityStrengthMachineUtilizationInstanceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityStrengthMachineUtilizationInstanceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityStrengthMachineUtilizationInstance': FacilityStrengthMachineUtilizationInstanceDataFromJSON(json['facilityStrengthMachineUtilizationInstance']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityStrengthMachineUtilizationInstanceResponseToJSON(value?: FacilityStrengthMachineUtilizationInstanceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityStrengthMachineUtilizationInstance': FacilityStrengthMachineUtilizationInstanceDataToJSON(value.facilityStrengthMachineUtilizationInstance),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

