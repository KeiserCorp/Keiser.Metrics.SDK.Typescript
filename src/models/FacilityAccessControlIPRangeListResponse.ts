/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.28
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
import type { FacilityAccessControlIPRangeListResponseMeta } from './FacilityAccessControlIPRangeListResponseMeta';
import {
    FacilityAccessControlIPRangeListResponseMetaFromJSON,
    FacilityAccessControlIPRangeListResponseMetaFromJSONTyped,
    FacilityAccessControlIPRangeListResponseMetaToJSON,
} from './FacilityAccessControlIPRangeListResponseMeta';

/**
 * 
 * @export
 * @interface FacilityAccessControlIPRangeListResponse
 */
export interface FacilityAccessControlIPRangeListResponse {
    /**
     * 
     * @type {Array<FacilityAccessControlIPRangeData>}
     * @memberof FacilityAccessControlIPRangeListResponse
     */
    facilityAccessControlIPRanges: Array<FacilityAccessControlIPRangeData>;
    /**
     * 
     * @type {FacilityAccessControlIPRangeListResponseMeta}
     * @memberof FacilityAccessControlIPRangeListResponse
     */
    facilityAccessControlIPRangesMeta: FacilityAccessControlIPRangeListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof FacilityAccessControlIPRangeListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityAccessControlIPRangeListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityAccessControlIPRangeListResponse interface.
 */
export function instanceOfFacilityAccessControlIPRangeListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityAccessControlIPRanges" in value;
    isInstance = isInstance && "facilityAccessControlIPRangesMeta" in value;

    return isInstance;
}

export function FacilityAccessControlIPRangeListResponseFromJSON(json: any): FacilityAccessControlIPRangeListResponse {
    return FacilityAccessControlIPRangeListResponseFromJSONTyped(json, false);
}

export function FacilityAccessControlIPRangeListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityAccessControlIPRangeListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityAccessControlIPRanges': ((json['facilityAccessControlIPRanges'] as Array<any>).map(FacilityAccessControlIPRangeDataFromJSON)),
        'facilityAccessControlIPRangesMeta': FacilityAccessControlIPRangeListResponseMetaFromJSON(json['facilityAccessControlIPRangesMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityAccessControlIPRangeListResponseToJSON(value?: FacilityAccessControlIPRangeListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityAccessControlIPRanges': ((value.facilityAccessControlIPRanges as Array<any>).map(FacilityAccessControlIPRangeDataToJSON)),
        'facilityAccessControlIPRangesMeta': FacilityAccessControlIPRangeListResponseMetaToJSON(value.facilityAccessControlIPRangesMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

