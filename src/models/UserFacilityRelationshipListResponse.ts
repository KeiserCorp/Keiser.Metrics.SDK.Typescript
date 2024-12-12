/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.35
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
import type { UserFacilityRelationshipListResponseMeta } from './UserFacilityRelationshipListResponseMeta';
import {
    UserFacilityRelationshipListResponseMetaFromJSON,
    UserFacilityRelationshipListResponseMetaFromJSONTyped,
    UserFacilityRelationshipListResponseMetaToJSON,
} from './UserFacilityRelationshipListResponseMeta';

/**
 * 
 * @export
 * @interface UserFacilityRelationshipListResponse
 */
export interface UserFacilityRelationshipListResponse {
    /**
     * 
     * @type {Array<FacilityRelationshipData>}
     * @memberof UserFacilityRelationshipListResponse
     */
    facilityRelationships: Array<FacilityRelationshipData>;
    /**
     * 
     * @type {UserFacilityRelationshipListResponseMeta}
     * @memberof UserFacilityRelationshipListResponse
     */
    facilityRelationshipsMeta: UserFacilityRelationshipListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof UserFacilityRelationshipListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof UserFacilityRelationshipListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the UserFacilityRelationshipListResponse interface.
 */
export function instanceOfUserFacilityRelationshipListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityRelationships" in value;
    isInstance = isInstance && "facilityRelationshipsMeta" in value;

    return isInstance;
}

export function UserFacilityRelationshipListResponseFromJSON(json: any): UserFacilityRelationshipListResponse {
    return UserFacilityRelationshipListResponseFromJSONTyped(json, false);
}

export function UserFacilityRelationshipListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserFacilityRelationshipListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityRelationships': ((json['facilityRelationships'] as Array<any>).map(FacilityRelationshipDataFromJSON)),
        'facilityRelationshipsMeta': UserFacilityRelationshipListResponseMetaFromJSON(json['facilityRelationshipsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function UserFacilityRelationshipListResponseToJSON(value?: UserFacilityRelationshipListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityRelationships': ((value.facilityRelationships as Array<any>).map(FacilityRelationshipDataToJSON)),
        'facilityRelationshipsMeta': UserFacilityRelationshipListResponseMetaToJSON(value.facilityRelationshipsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

