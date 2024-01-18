/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.26
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityData } from './FacilityData';
import {
    FacilityDataFromJSON,
    FacilityDataFromJSONTyped,
    FacilityDataToJSON,
} from './FacilityData';
import type { FacilityListResponseMeta } from './FacilityListResponseMeta';
import {
    FacilityListResponseMetaFromJSON,
    FacilityListResponseMetaFromJSONTyped,
    FacilityListResponseMetaToJSON,
} from './FacilityListResponseMeta';

/**
 * 
 * @export
 * @interface FacilityListResponse
 */
export interface FacilityListResponse {
    /**
     * 
     * @type {Array<FacilityData>}
     * @memberof FacilityListResponse
     */
    facilities: Array<FacilityData>;
    /**
     * 
     * @type {FacilityListResponseMeta}
     * @memberof FacilityListResponse
     */
    facilitiesMeta: FacilityListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof FacilityListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityListResponse interface.
 */
export function instanceOfFacilityListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilities" in value;
    isInstance = isInstance && "facilitiesMeta" in value;

    return isInstance;
}

export function FacilityListResponseFromJSON(json: any): FacilityListResponse {
    return FacilityListResponseFromJSONTyped(json, false);
}

export function FacilityListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilities': ((json['facilities'] as Array<any>).map(FacilityDataFromJSON)),
        'facilitiesMeta': FacilityListResponseMetaFromJSON(json['facilitiesMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityListResponseToJSON(value?: FacilityListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilities': ((value.facilities as Array<any>).map(FacilityDataToJSON)),
        'facilitiesMeta': FacilityListResponseMetaToJSON(value.facilitiesMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

