/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.18
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
 * @interface FacilityStrengthMachineInitializerOTPTokenResponse
 */
export interface FacilityStrengthMachineInitializerOTPTokenResponse {
    /**
     * 
     * @type {Date}
     * @memberof FacilityStrengthMachineInitializerOTPTokenResponse
     */
    expiresAt: Date;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineInitializerOTPTokenResponse
     */
    initializerToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineInitializerOTPTokenResponse
     */
    url?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityStrengthMachineInitializerOTPTokenResponse
     */
    isEncrypted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineInitializerOTPTokenResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineInitializerOTPTokenResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityStrengthMachineInitializerOTPTokenResponse interface.
 */
export function instanceOfFacilityStrengthMachineInitializerOTPTokenResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "expiresAt" in value;

    return isInstance;
}

export function FacilityStrengthMachineInitializerOTPTokenResponseFromJSON(json: any): FacilityStrengthMachineInitializerOTPTokenResponse {
    return FacilityStrengthMachineInitializerOTPTokenResponseFromJSONTyped(json, false);
}

export function FacilityStrengthMachineInitializerOTPTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityStrengthMachineInitializerOTPTokenResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'expiresAt': (new Date(json['expiresAt'])),
        'initializerToken': !exists(json, 'initializerToken') ? undefined : json['initializerToken'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'isEncrypted': !exists(json, 'isEncrypted') ? undefined : json['isEncrypted'],
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityStrengthMachineInitializerOTPTokenResponseToJSON(value?: FacilityStrengthMachineInitializerOTPTokenResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'expiresAt': (value.expiresAt.toISOString()),
        'initializerToken': value.initializerToken,
        'url': value.url,
        'isEncrypted': value.isEncrypted,
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

