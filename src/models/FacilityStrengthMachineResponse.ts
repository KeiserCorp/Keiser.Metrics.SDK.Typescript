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
import type { FacilityStrengthMachineData } from './FacilityStrengthMachineData';
import {
    FacilityStrengthMachineDataFromJSON,
    FacilityStrengthMachineDataFromJSONTyped,
    FacilityStrengthMachineDataToJSON,
} from './FacilityStrengthMachineData';

/**
 * 
 * @export
 * @interface FacilityStrengthMachineResponse
 */
export interface FacilityStrengthMachineResponse {
    /**
     * 
     * @type {FacilityStrengthMachineData}
     * @memberof FacilityStrengthMachineResponse
     */
    facilityStrengthMachine: FacilityStrengthMachineData;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityStrengthMachineResponse interface.
 */
export function instanceOfFacilityStrengthMachineResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityStrengthMachine" in value;

    return isInstance;
}

export function FacilityStrengthMachineResponseFromJSON(json: any): FacilityStrengthMachineResponse {
    return FacilityStrengthMachineResponseFromJSONTyped(json, false);
}

export function FacilityStrengthMachineResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityStrengthMachineResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityStrengthMachine': FacilityStrengthMachineDataFromJSON(json['facilityStrengthMachine']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityStrengthMachineResponseToJSON(value?: FacilityStrengthMachineResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityStrengthMachine': FacilityStrengthMachineDataToJSON(value.facilityStrengthMachine),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

