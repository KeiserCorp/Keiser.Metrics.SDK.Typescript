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
import type { FacilityAccessControlIPRangeData } from './FacilityAccessControlIPRangeData';
import {
    FacilityAccessControlIPRangeDataFromJSON,
    FacilityAccessControlIPRangeDataFromJSONTyped,
    FacilityAccessControlIPRangeDataToJSON,
} from './FacilityAccessControlIPRangeData';

/**
 * 
 * @export
 * @interface FacilityAccessControlIPRangeResponse
 */
export interface FacilityAccessControlIPRangeResponse {
    /**
     * 
     * @type {FacilityAccessControlIPRangeData}
     * @memberof FacilityAccessControlIPRangeResponse
     */
    facilityAccessControlIPRange: FacilityAccessControlIPRangeData;
    /**
     * 
     * @type {string}
     * @memberof FacilityAccessControlIPRangeResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityAccessControlIPRangeResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityAccessControlIPRangeResponse interface.
 */
export function instanceOfFacilityAccessControlIPRangeResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityAccessControlIPRange" in value;

    return isInstance;
}

export function FacilityAccessControlIPRangeResponseFromJSON(json: any): FacilityAccessControlIPRangeResponse {
    return FacilityAccessControlIPRangeResponseFromJSONTyped(json, false);
}

export function FacilityAccessControlIPRangeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityAccessControlIPRangeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityAccessControlIPRange': FacilityAccessControlIPRangeDataFromJSON(json['facilityAccessControlIPRange']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityAccessControlIPRangeResponseToJSON(value?: FacilityAccessControlIPRangeResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityAccessControlIPRange': FacilityAccessControlIPRangeDataToJSON(value.facilityAccessControlIPRange),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

