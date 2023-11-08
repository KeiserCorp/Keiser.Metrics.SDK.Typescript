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
/**
 * 
 * @export
 * @interface FacilityStrengthMachineInitializerTokenResponse
 */
export interface FacilityStrengthMachineInitializerTokenResponse {
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineInitializerTokenResponse
     */
    initializerToken: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineInitializerTokenResponse
     */
    url: string;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityStrengthMachineInitializerTokenResponse
     */
    isEncrypted: boolean;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineInitializerTokenResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineInitializerTokenResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityStrengthMachineInitializerTokenResponse interface.
 */
export function instanceOfFacilityStrengthMachineInitializerTokenResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "initializerToken" in value;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "isEncrypted" in value;

    return isInstance;
}

export function FacilityStrengthMachineInitializerTokenResponseFromJSON(json: any): FacilityStrengthMachineInitializerTokenResponse {
    return FacilityStrengthMachineInitializerTokenResponseFromJSONTyped(json, false);
}

export function FacilityStrengthMachineInitializerTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityStrengthMachineInitializerTokenResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'initializerToken': json['initializerToken'],
        'url': json['url'],
        'isEncrypted': json['isEncrypted'],
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityStrengthMachineInitializerTokenResponseToJSON(value?: FacilityStrengthMachineInitializerTokenResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'initializerToken': value.initializerToken,
        'url': value.url,
        'isEncrypted': value.isEncrypted,
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

