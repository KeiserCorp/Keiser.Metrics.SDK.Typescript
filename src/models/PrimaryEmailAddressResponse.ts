/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.33
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PrimaryEmailAddressData } from './PrimaryEmailAddressData';
import {
    PrimaryEmailAddressDataFromJSON,
    PrimaryEmailAddressDataFromJSONTyped,
    PrimaryEmailAddressDataToJSON,
} from './PrimaryEmailAddressData';

/**
 * 
 * @export
 * @interface PrimaryEmailAddressResponse
 */
export interface PrimaryEmailAddressResponse {
    /**
     * 
     * @type {PrimaryEmailAddressData}
     * @memberof PrimaryEmailAddressResponse
     */
    primaryEmailAddress: PrimaryEmailAddressData;
    /**
     * 
     * @type {string}
     * @memberof PrimaryEmailAddressResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof PrimaryEmailAddressResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the PrimaryEmailAddressResponse interface.
 */
export function instanceOfPrimaryEmailAddressResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "primaryEmailAddress" in value;

    return isInstance;
}

export function PrimaryEmailAddressResponseFromJSON(json: any): PrimaryEmailAddressResponse {
    return PrimaryEmailAddressResponseFromJSONTyped(json, false);
}

export function PrimaryEmailAddressResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrimaryEmailAddressResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'primaryEmailAddress': PrimaryEmailAddressDataFromJSON(json['primaryEmailAddress']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function PrimaryEmailAddressResponseToJSON(value?: PrimaryEmailAddressResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'primaryEmailAddress': PrimaryEmailAddressDataToJSON(value.primaryEmailAddress),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

