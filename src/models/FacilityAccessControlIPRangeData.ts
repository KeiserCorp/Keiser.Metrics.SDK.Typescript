/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface FacilityAccessControlIPRangeData
 */
export interface FacilityAccessControlIPRangeData {
    /**
     * 
     * @type {number}
     * @memberof FacilityAccessControlIPRangeData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof FacilityAccessControlIPRangeData
     */
    cidr: string;
}

/**
 * Check if a given object implements the FacilityAccessControlIPRangeData interface.
 */
export function instanceOfFacilityAccessControlIPRangeData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "cidr" in value;

    return isInstance;
}

export function FacilityAccessControlIPRangeDataFromJSON(json: any): FacilityAccessControlIPRangeData {
    return FacilityAccessControlIPRangeDataFromJSONTyped(json, false);
}

export function FacilityAccessControlIPRangeDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityAccessControlIPRangeData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'cidr': json['cidr'],
    };
}

export function FacilityAccessControlIPRangeDataToJSON(value?: FacilityAccessControlIPRangeData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'cidr': value.cidr,
    };
}

