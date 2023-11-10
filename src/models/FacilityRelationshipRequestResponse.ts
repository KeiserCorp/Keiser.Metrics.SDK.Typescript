/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.11
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityRelationshipRequestData } from './FacilityRelationshipRequestData';
import {
    FacilityRelationshipRequestDataFromJSON,
    FacilityRelationshipRequestDataFromJSONTyped,
    FacilityRelationshipRequestDataToJSON,
} from './FacilityRelationshipRequestData';

/**
 * 
 * @export
 * @interface FacilityRelationshipRequestResponse
 */
export interface FacilityRelationshipRequestResponse {
    /**
     * 
     * @type {FacilityRelationshipRequestData}
     * @memberof FacilityRelationshipRequestResponse
     */
    facilityRelationshipRequest: FacilityRelationshipRequestData;
    /**
     * 
     * @type {string}
     * @memberof FacilityRelationshipRequestResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityRelationshipRequestResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityRelationshipRequestResponse interface.
 */
export function instanceOfFacilityRelationshipRequestResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityRelationshipRequest" in value;

    return isInstance;
}

export function FacilityRelationshipRequestResponseFromJSON(json: any): FacilityRelationshipRequestResponse {
    return FacilityRelationshipRequestResponseFromJSONTyped(json, false);
}

export function FacilityRelationshipRequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityRelationshipRequestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityRelationshipRequest': FacilityRelationshipRequestDataFromJSON(json['facilityRelationshipRequest']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityRelationshipRequestResponseToJSON(value?: FacilityRelationshipRequestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityRelationshipRequest': FacilityRelationshipRequestDataToJSON(value.facilityRelationshipRequest),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

