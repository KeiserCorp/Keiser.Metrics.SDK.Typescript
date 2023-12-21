/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.14
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityLicenseData } from './FacilityLicenseData';
import {
    FacilityLicenseDataFromJSON,
    FacilityLicenseDataFromJSONTyped,
    FacilityLicenseDataToJSON,
} from './FacilityLicenseData';

/**
 * 
 * @export
 * @interface FacilityLicenseResponse
 */
export interface FacilityLicenseResponse {
    /**
     * 
     * @type {FacilityLicenseData}
     * @memberof FacilityLicenseResponse
     */
    facilityLicense: FacilityLicenseData;
    /**
     * 
     * @type {string}
     * @memberof FacilityLicenseResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityLicenseResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityLicenseResponse interface.
 */
export function instanceOfFacilityLicenseResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityLicense" in value;

    return isInstance;
}

export function FacilityLicenseResponseFromJSON(json: any): FacilityLicenseResponse {
    return FacilityLicenseResponseFromJSONTyped(json, false);
}

export function FacilityLicenseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityLicenseResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityLicense': FacilityLicenseDataFromJSON(json['facilityLicense']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityLicenseResponseToJSON(value?: FacilityLicenseResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityLicense': FacilityLicenseDataToJSON(value.facilityLicense),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

