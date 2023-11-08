/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.3
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
 * @interface FacilityStrengthMachineBulkCreateResponse
 */
export interface FacilityStrengthMachineBulkCreateResponse {
    /**
     * 
     * @type {Array<FacilityStrengthMachineData>}
     * @memberof FacilityStrengthMachineBulkCreateResponse
     */
    facilityStrengthMachines: Array<FacilityStrengthMachineData>;
    /**
     * 
     * @type {Array<FacilityStrengthMachineData>}
     * @memberof FacilityStrengthMachineBulkCreateResponse
     */
    unknownMachines: Array<FacilityStrengthMachineData>;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineBulkCreateResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineBulkCreateResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityStrengthMachineBulkCreateResponse interface.
 */
export function instanceOfFacilityStrengthMachineBulkCreateResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityStrengthMachines" in value;
    isInstance = isInstance && "unknownMachines" in value;

    return isInstance;
}

export function FacilityStrengthMachineBulkCreateResponseFromJSON(json: any): FacilityStrengthMachineBulkCreateResponse {
    return FacilityStrengthMachineBulkCreateResponseFromJSONTyped(json, false);
}

export function FacilityStrengthMachineBulkCreateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityStrengthMachineBulkCreateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityStrengthMachines': ((json['facilityStrengthMachines'] as Array<any>).map(FacilityStrengthMachineDataFromJSON)),
        'unknownMachines': ((json['unknownMachines'] as Array<any>).map(FacilityStrengthMachineDataFromJSON)),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityStrengthMachineBulkCreateResponseToJSON(value?: FacilityStrengthMachineBulkCreateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityStrengthMachines': ((value.facilityStrengthMachines as Array<any>).map(FacilityStrengthMachineDataToJSON)),
        'unknownMachines': ((value.unknownMachines as Array<any>).map(FacilityStrengthMachineDataToJSON)),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

