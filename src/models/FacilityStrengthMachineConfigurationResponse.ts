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
import type { FacilityStrengthMachineConfigurationData } from './FacilityStrengthMachineConfigurationData';
import {
    FacilityStrengthMachineConfigurationDataFromJSON,
    FacilityStrengthMachineConfigurationDataFromJSONTyped,
    FacilityStrengthMachineConfigurationDataToJSON,
} from './FacilityStrengthMachineConfigurationData';

/**
 * 
 * @export
 * @interface FacilityStrengthMachineConfigurationResponse
 */
export interface FacilityStrengthMachineConfigurationResponse {
    /**
     * 
     * @type {FacilityStrengthMachineConfigurationData}
     * @memberof FacilityStrengthMachineConfigurationResponse
     */
    facilityStrengthMachineConfiguration: FacilityStrengthMachineConfigurationData;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineConfigurationResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineConfigurationResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityStrengthMachineConfigurationResponse interface.
 */
export function instanceOfFacilityStrengthMachineConfigurationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityStrengthMachineConfiguration" in value;

    return isInstance;
}

export function FacilityStrengthMachineConfigurationResponseFromJSON(json: any): FacilityStrengthMachineConfigurationResponse {
    return FacilityStrengthMachineConfigurationResponseFromJSONTyped(json, false);
}

export function FacilityStrengthMachineConfigurationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityStrengthMachineConfigurationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityStrengthMachineConfiguration': FacilityStrengthMachineConfigurationDataFromJSON(json['facilityStrengthMachineConfiguration']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityStrengthMachineConfigurationResponseToJSON(value?: FacilityStrengthMachineConfigurationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityStrengthMachineConfiguration': FacilityStrengthMachineConfigurationDataToJSON(value.facilityStrengthMachineConfiguration),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

