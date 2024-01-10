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
import type { FacilityProfileData } from './FacilityProfileData';
import {
    FacilityProfileDataFromJSON,
    FacilityProfileDataFromJSONTyped,
    FacilityProfileDataToJSON,
} from './FacilityProfileData';

/**
 * 
 * @export
 * @interface FacilityProfileResponse
 */
export interface FacilityProfileResponse {
    /**
     * 
     * @type {FacilityProfileData}
     * @memberof FacilityProfileResponse
     */
    facilityProfile: FacilityProfileData;
    /**
     * 
     * @type {string}
     * @memberof FacilityProfileResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityProfileResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityProfileResponse interface.
 */
export function instanceOfFacilityProfileResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityProfile" in value;

    return isInstance;
}

export function FacilityProfileResponseFromJSON(json: any): FacilityProfileResponse {
    return FacilityProfileResponseFromJSONTyped(json, false);
}

export function FacilityProfileResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityProfileResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityProfile': FacilityProfileDataFromJSON(json['facilityProfile']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityProfileResponseToJSON(value?: FacilityProfileResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityProfile': FacilityProfileDataToJSON(value.facilityProfile),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

