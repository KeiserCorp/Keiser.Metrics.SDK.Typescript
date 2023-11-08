/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityAccessControlKioskData } from './FacilityAccessControlKioskData';
import {
    FacilityAccessControlKioskDataFromJSON,
    FacilityAccessControlKioskDataFromJSONTyped,
    FacilityAccessControlKioskDataToJSON,
} from './FacilityAccessControlKioskData';

/**
 * 
 * @export
 * @interface FacilityAccessControlKioskResponse
 */
export interface FacilityAccessControlKioskResponse {
    /**
     * 
     * @type {FacilityAccessControlKioskData}
     * @memberof FacilityAccessControlKioskResponse
     */
    facilityAccessControlKiosk: FacilityAccessControlKioskData;
    /**
     * 
     * @type {string}
     * @memberof FacilityAccessControlKioskResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityAccessControlKioskResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityAccessControlKioskResponse interface.
 */
export function instanceOfFacilityAccessControlKioskResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityAccessControlKiosk" in value;

    return isInstance;
}

export function FacilityAccessControlKioskResponseFromJSON(json: any): FacilityAccessControlKioskResponse {
    return FacilityAccessControlKioskResponseFromJSONTyped(json, false);
}

export function FacilityAccessControlKioskResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityAccessControlKioskResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityAccessControlKiosk': FacilityAccessControlKioskDataFromJSON(json['facilityAccessControlKiosk']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityAccessControlKioskResponseToJSON(value?: FacilityAccessControlKioskResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityAccessControlKiosk': FacilityAccessControlKioskDataToJSON(value.facilityAccessControlKiosk),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

