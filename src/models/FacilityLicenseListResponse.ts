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
import type { FacilityLicenseData } from './FacilityLicenseData';
import {
    FacilityLicenseDataFromJSON,
    FacilityLicenseDataFromJSONTyped,
    FacilityLicenseDataToJSON,
} from './FacilityLicenseData';
import type { FacilityLicenseListResponseMeta } from './FacilityLicenseListResponseMeta';
import {
    FacilityLicenseListResponseMetaFromJSON,
    FacilityLicenseListResponseMetaFromJSONTyped,
    FacilityLicenseListResponseMetaToJSON,
} from './FacilityLicenseListResponseMeta';

/**
 * 
 * @export
 * @interface FacilityLicenseListResponse
 */
export interface FacilityLicenseListResponse {
    /**
     * 
     * @type {Array<FacilityLicenseData>}
     * @memberof FacilityLicenseListResponse
     */
    facilityLicenses: Array<FacilityLicenseData>;
    /**
     * 
     * @type {FacilityLicenseListResponseMeta}
     * @memberof FacilityLicenseListResponse
     */
    facilityLicensesMeta: FacilityLicenseListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof FacilityLicenseListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityLicenseListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityLicenseListResponse interface.
 */
export function instanceOfFacilityLicenseListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityLicenses" in value;
    isInstance = isInstance && "facilityLicensesMeta" in value;

    return isInstance;
}

export function FacilityLicenseListResponseFromJSON(json: any): FacilityLicenseListResponse {
    return FacilityLicenseListResponseFromJSONTyped(json, false);
}

export function FacilityLicenseListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityLicenseListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityLicenses': ((json['facilityLicenses'] as Array<any>).map(FacilityLicenseDataFromJSON)),
        'facilityLicensesMeta': FacilityLicenseListResponseMetaFromJSON(json['facilityLicensesMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityLicenseListResponseToJSON(value?: FacilityLicenseListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityLicenses': ((value.facilityLicenses as Array<any>).map(FacilityLicenseDataToJSON)),
        'facilityLicensesMeta': FacilityLicenseListResponseMetaToJSON(value.facilityLicensesMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

