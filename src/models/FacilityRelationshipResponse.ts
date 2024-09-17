/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.32
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
 * @interface FacilityRelationshipResponse
 */
export interface FacilityRelationshipResponse {
    /**
     * 
     * @type {FacilityRelationshipData}
     * @memberof FacilityRelationshipResponse
     */
    facilityRelationship: FacilityRelationshipData;
    /**
     * 
     * @type {string}
     * @memberof FacilityRelationshipResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityRelationshipResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityRelationshipResponse interface.
 */
export function instanceOfFacilityRelationshipResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityRelationship" in value;

    return isInstance;
}

export function FacilityRelationshipResponseFromJSON(json: any): FacilityRelationshipResponse {
    return FacilityRelationshipResponseFromJSONTyped(json, false);
}

export function FacilityRelationshipResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityRelationshipResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityRelationship': FacilityRelationshipDataFromJSON(json['facilityRelationship']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityRelationshipResponseToJSON(value?: FacilityRelationshipResponse | null): any {
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

