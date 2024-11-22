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
import type { FacilityAccessControlData } from './FacilityAccessControlData';
import {
    FacilityAccessControlDataFromJSON,
    FacilityAccessControlDataFromJSONTyped,
    FacilityAccessControlDataToJSON,
} from './FacilityAccessControlData';

/**
 * 
 * @export
 * @interface FacilityAccessControlResponse
 */
export interface FacilityAccessControlResponse {
    /**
     * 
     * @type {FacilityAccessControlData}
     * @memberof FacilityAccessControlResponse
     */
    facilityAccessControl: FacilityAccessControlData;
    /**
     * 
     * @type {string}
     * @memberof FacilityAccessControlResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityAccessControlResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityAccessControlResponse interface.
 */
export function instanceOfFacilityAccessControlResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityAccessControl" in value;

    return isInstance;
}

export function FacilityAccessControlResponseFromJSON(json: any): FacilityAccessControlResponse {
    return FacilityAccessControlResponseFromJSONTyped(json, false);
}

export function FacilityAccessControlResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityAccessControlResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityAccessControl': FacilityAccessControlDataFromJSON(json['facilityAccessControl']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityAccessControlResponseToJSON(value?: FacilityAccessControlResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityAccessControl': FacilityAccessControlDataToJSON(value.facilityAccessControl),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

