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
import type { FacilityStrengthMachineData } from './FacilityStrengthMachineData';
import {
    FacilityStrengthMachineDataFromJSON,
    FacilityStrengthMachineDataFromJSONTyped,
    FacilityStrengthMachineDataToJSON,
} from './FacilityStrengthMachineData';

/**
 * 
 * @export
 * @interface StrengthMachineInitializeResponse
 */
export interface StrengthMachineInitializeResponse {
    /**
     * 
     * @type {FacilityStrengthMachineData}
     * @memberof StrengthMachineInitializeResponse
     */
    facilityStrengthMachine: FacilityStrengthMachineData;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineInitializeResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineInitializeResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the StrengthMachineInitializeResponse interface.
 */
export function instanceOfStrengthMachineInitializeResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityStrengthMachine" in value;

    return isInstance;
}

export function StrengthMachineInitializeResponseFromJSON(json: any): StrengthMachineInitializeResponse {
    return StrengthMachineInitializeResponseFromJSONTyped(json, false);
}

export function StrengthMachineInitializeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthMachineInitializeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityStrengthMachine': FacilityStrengthMachineDataFromJSON(json['facilityStrengthMachine']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StrengthMachineInitializeResponseToJSON(value?: StrengthMachineInitializeResponse | null): any {
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

