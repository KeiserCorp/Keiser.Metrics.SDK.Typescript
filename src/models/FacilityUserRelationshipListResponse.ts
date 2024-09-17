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
import type { FacilityUserRelationshipListResponseMeta } from './FacilityUserRelationshipListResponseMeta';
import {
    FacilityUserRelationshipListResponseMetaFromJSON,
    FacilityUserRelationshipListResponseMetaFromJSONTyped,
    FacilityUserRelationshipListResponseMetaToJSON,
} from './FacilityUserRelationshipListResponseMeta';

/**
 * 
 * @export
 * @interface FacilityUserRelationshipListResponse
 */
export interface FacilityUserRelationshipListResponse {
    /**
     * 
     * @type {Array<FacilityRelationshipData>}
     * @memberof FacilityUserRelationshipListResponse
     */
    facilityRelationships: Array<FacilityRelationshipData>;
    /**
     * 
     * @type {FacilityUserRelationshipListResponseMeta}
     * @memberof FacilityUserRelationshipListResponse
     */
    facilityRelationshipsMeta: FacilityUserRelationshipListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof FacilityUserRelationshipListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityUserRelationshipListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityUserRelationshipListResponse interface.
 */
export function instanceOfFacilityUserRelationshipListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityRelationships" in value;
    isInstance = isInstance && "facilityRelationshipsMeta" in value;

    return isInstance;
}

export function FacilityUserRelationshipListResponseFromJSON(json: any): FacilityUserRelationshipListResponse {
    return FacilityUserRelationshipListResponseFromJSONTyped(json, false);
}

export function FacilityUserRelationshipListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityUserRelationshipListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityRelationships': ((json['facilityRelationships'] as Array<any>).map(FacilityRelationshipDataFromJSON)),
        'facilityRelationshipsMeta': FacilityUserRelationshipListResponseMetaFromJSON(json['facilityRelationshipsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityUserRelationshipListResponseToJSON(value?: FacilityUserRelationshipListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityRelationships': ((value.facilityRelationships as Array<any>).map(FacilityRelationshipDataToJSON)),
        'facilityRelationshipsMeta': FacilityUserRelationshipListResponseMetaToJSON(value.facilityRelationshipsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

