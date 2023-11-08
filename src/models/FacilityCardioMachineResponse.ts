/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityCardioMachineData } from './FacilityCardioMachineData';
import {
    FacilityCardioMachineDataFromJSON,
    FacilityCardioMachineDataFromJSONTyped,
    FacilityCardioMachineDataToJSON,
} from './FacilityCardioMachineData';

/**
 * 
 * @export
 * @interface FacilityCardioMachineResponse
 */
export interface FacilityCardioMachineResponse {
    /**
     * 
     * @type {FacilityCardioMachineData}
     * @memberof FacilityCardioMachineResponse
     */
    facilityCardioMachine: FacilityCardioMachineData;
}

/**
 * Check if a given object implements the FacilityCardioMachineResponse interface.
 */
export function instanceOfFacilityCardioMachineResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityCardioMachine" in value;

    return isInstance;
}

export function FacilityCardioMachineResponseFromJSON(json: any): FacilityCardioMachineResponse {
    return FacilityCardioMachineResponseFromJSONTyped(json, false);
}

export function FacilityCardioMachineResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityCardioMachineResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityCardioMachine': FacilityCardioMachineDataFromJSON(json['facilityCardioMachine']),
    };
}

export function FacilityCardioMachineResponseToJSON(value?: FacilityCardioMachineResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityCardioMachine': FacilityCardioMachineDataToJSON(value.facilityCardioMachine),
    };
}

