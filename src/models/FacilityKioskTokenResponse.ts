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
/**
 * 
 * @export
 * @interface FacilityKioskTokenResponse
 */
export interface FacilityKioskTokenResponse {
    /**
     * 
     * @type {string}
     * @memberof FacilityKioskTokenResponse
     */
    kioskToken: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityKioskTokenResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityKioskTokenResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityKioskTokenResponse interface.
 */
export function instanceOfFacilityKioskTokenResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "kioskToken" in value;

    return isInstance;
}

export function FacilityKioskTokenResponseFromJSON(json: any): FacilityKioskTokenResponse {
    return FacilityKioskTokenResponseFromJSONTyped(json, false);
}

export function FacilityKioskTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityKioskTokenResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kioskToken': json['kioskToken'],
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityKioskTokenResponseToJSON(value?: FacilityKioskTokenResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kioskToken': value.kioskToken,
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

