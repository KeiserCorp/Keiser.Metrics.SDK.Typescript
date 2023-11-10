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
import type { PrivilegedFacilityRelationshipRequestListResponseMeta } from './PrivilegedFacilityRelationshipRequestListResponseMeta';
import {
    PrivilegedFacilityRelationshipRequestListResponseMetaFromJSON,
    PrivilegedFacilityRelationshipRequestListResponseMetaFromJSONTyped,
    PrivilegedFacilityRelationshipRequestListResponseMetaToJSON,
} from './PrivilegedFacilityRelationshipRequestListResponseMeta';

/**
 * 
 * @export
 * @interface PrivilegedFacilityRelationshipRequestListResponse
 */
export interface PrivilegedFacilityRelationshipRequestListResponse {
    /**
     * 
     * @type {Array<FacilityRelationshipRequestData>}
     * @memberof PrivilegedFacilityRelationshipRequestListResponse
     */
    facilityRelationshipRequests: Array<FacilityRelationshipRequestData>;
    /**
     * 
     * @type {PrivilegedFacilityRelationshipRequestListResponseMeta}
     * @memberof PrivilegedFacilityRelationshipRequestListResponse
     */
    facilityRelationshipRequestsMeta: PrivilegedFacilityRelationshipRequestListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof PrivilegedFacilityRelationshipRequestListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof PrivilegedFacilityRelationshipRequestListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the PrivilegedFacilityRelationshipRequestListResponse interface.
 */
export function instanceOfPrivilegedFacilityRelationshipRequestListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityRelationshipRequests" in value;
    isInstance = isInstance && "facilityRelationshipRequestsMeta" in value;

    return isInstance;
}

export function PrivilegedFacilityRelationshipRequestListResponseFromJSON(json: any): PrivilegedFacilityRelationshipRequestListResponse {
    return PrivilegedFacilityRelationshipRequestListResponseFromJSONTyped(json, false);
}

export function PrivilegedFacilityRelationshipRequestListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrivilegedFacilityRelationshipRequestListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityRelationshipRequests': ((json['facilityRelationshipRequests'] as Array<any>).map(FacilityRelationshipRequestDataFromJSON)),
        'facilityRelationshipRequestsMeta': PrivilegedFacilityRelationshipRequestListResponseMetaFromJSON(json['facilityRelationshipRequestsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function PrivilegedFacilityRelationshipRequestListResponseToJSON(value?: PrivilegedFacilityRelationshipRequestListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityRelationshipRequests': ((value.facilityRelationshipRequests as Array<any>).map(FacilityRelationshipRequestDataToJSON)),
        'facilityRelationshipRequestsMeta': PrivilegedFacilityRelationshipRequestListResponseMetaToJSON(value.facilityRelationshipRequestsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

