/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.22
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityInBodyIntegrationData } from './FacilityInBodyIntegrationData';
import {
    FacilityInBodyIntegrationDataFromJSON,
    FacilityInBodyIntegrationDataFromJSONTyped,
    FacilityInBodyIntegrationDataToJSON,
} from './FacilityInBodyIntegrationData';

/**
 * 
 * @export
 * @interface FacilityInBodyIntegrationResponse
 */
export interface FacilityInBodyIntegrationResponse {
    /**
     * 
     * @type {FacilityInBodyIntegrationData}
     * @memberof FacilityInBodyIntegrationResponse
     */
    facilityInBodyIntegration: FacilityInBodyIntegrationData;
}

/**
 * Check if a given object implements the FacilityInBodyIntegrationResponse interface.
 */
export function instanceOfFacilityInBodyIntegrationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityInBodyIntegration" in value;

    return isInstance;
}

export function FacilityInBodyIntegrationResponseFromJSON(json: any): FacilityInBodyIntegrationResponse {
    return FacilityInBodyIntegrationResponseFromJSONTyped(json, false);
}

export function FacilityInBodyIntegrationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityInBodyIntegrationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityInBodyIntegration': FacilityInBodyIntegrationDataFromJSON(json['facilityInBodyIntegration']),
    };
}

export function FacilityInBodyIntegrationResponseToJSON(value?: FacilityInBodyIntegrationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityInBodyIntegration': FacilityInBodyIntegrationDataToJSON(value.facilityInBodyIntegration),
    };
}

