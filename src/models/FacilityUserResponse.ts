/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityRelationshipData } from './FacilityRelationshipData';
import {
    FacilityRelationshipDataFromJSON,
    FacilityRelationshipDataFromJSONTyped,
    FacilityRelationshipDataToJSON,
} from './FacilityRelationshipData';

/**
 * 
 * @export
 * @interface FacilityUserResponse
 */
export interface FacilityUserResponse {
    /**
     * 
     * @type {FacilityRelationshipData}
     * @memberof FacilityUserResponse
     */
    facilityRelationship: FacilityRelationshipData;
    /**
     * 
     * @type {string}
     * @memberof FacilityUserResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityUserResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityUserResponse interface.
 */
export function instanceOfFacilityUserResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityRelationship" in value;

    return isInstance;
}

export function FacilityUserResponseFromJSON(json: any): FacilityUserResponse {
    return FacilityUserResponseFromJSONTyped(json, false);
}

export function FacilityUserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityUserResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityRelationship': FacilityRelationshipDataFromJSON(json['facilityRelationship']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityUserResponseToJSON(value?: FacilityUserResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityRelationship': FacilityRelationshipDataToJSON(value.facilityRelationship),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

