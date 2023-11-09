/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.9
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
import type { FacilityRelationshipRequestListResponseMeta } from './FacilityRelationshipRequestListResponseMeta';
import {
    FacilityRelationshipRequestListResponseMetaFromJSON,
    FacilityRelationshipRequestListResponseMetaFromJSONTyped,
    FacilityRelationshipRequestListResponseMetaToJSON,
} from './FacilityRelationshipRequestListResponseMeta';

/**
 * 
 * @export
 * @interface FacilityRelationshipRequestListResponse
 */
export interface FacilityRelationshipRequestListResponse {
    /**
     * 
     * @type {Array<FacilityRelationshipRequestData>}
     * @memberof FacilityRelationshipRequestListResponse
     */
    facilityRelationshipRequests: Array<FacilityRelationshipRequestData>;
    /**
     * 
     * @type {FacilityRelationshipRequestListResponseMeta}
     * @memberof FacilityRelationshipRequestListResponse
     */
    facilityRelationshipRequestsMeta: FacilityRelationshipRequestListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof FacilityRelationshipRequestListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityRelationshipRequestListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityRelationshipRequestListResponse interface.
 */
export function instanceOfFacilityRelationshipRequestListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityRelationshipRequests" in value;
    isInstance = isInstance && "facilityRelationshipRequestsMeta" in value;

    return isInstance;
}

export function FacilityRelationshipRequestListResponseFromJSON(json: any): FacilityRelationshipRequestListResponse {
    return FacilityRelationshipRequestListResponseFromJSONTyped(json, false);
}

export function FacilityRelationshipRequestListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityRelationshipRequestListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityRelationshipRequests': ((json['facilityRelationshipRequests'] as Array<any>).map(FacilityRelationshipRequestDataFromJSON)),
        'facilityRelationshipRequestsMeta': FacilityRelationshipRequestListResponseMetaFromJSON(json['facilityRelationshipRequestsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityRelationshipRequestListResponseToJSON(value?: FacilityRelationshipRequestListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityRelationshipRequests': ((value.facilityRelationshipRequests as Array<any>).map(FacilityRelationshipRequestDataToJSON)),
        'facilityRelationshipRequestsMeta': FacilityRelationshipRequestListResponseMetaToJSON(value.facilityRelationshipRequestsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

