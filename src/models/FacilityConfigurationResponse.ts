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
import type { FacilityConfigurationData } from './FacilityConfigurationData';
import {
    FacilityConfigurationDataFromJSON,
    FacilityConfigurationDataFromJSONTyped,
    FacilityConfigurationDataToJSON,
} from './FacilityConfigurationData';

/**
 * 
 * @export
 * @interface FacilityConfigurationResponse
 */
export interface FacilityConfigurationResponse {
    /**
     * 
     * @type {FacilityConfigurationData}
     * @memberof FacilityConfigurationResponse
     */
    facilityConfiguration: FacilityConfigurationData;
    /**
     * 
     * @type {string}
     * @memberof FacilityConfigurationResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityConfigurationResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityConfigurationResponse interface.
 */
export function instanceOfFacilityConfigurationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityConfiguration" in value;

    return isInstance;
}

export function FacilityConfigurationResponseFromJSON(json: any): FacilityConfigurationResponse {
    return FacilityConfigurationResponseFromJSONTyped(json, false);
}

export function FacilityConfigurationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityConfigurationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityConfiguration': FacilityConfigurationDataFromJSON(json['facilityConfiguration']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityConfigurationResponseToJSON(value?: FacilityConfigurationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityConfiguration': FacilityConfigurationDataToJSON(value.facilityConfiguration),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

