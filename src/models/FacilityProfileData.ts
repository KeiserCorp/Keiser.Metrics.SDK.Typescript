/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.20
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
 * @interface FacilityProfileData
 */
export interface FacilityProfileData {
    /**
     * 
     * @type {string}
     * @memberof FacilityProfileData
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityProfileData
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityProfileData
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityProfileData
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityProfileData
     */
    postcode?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityProfileData
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityProfileData
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityProfileData
     */
    website?: string;
}

/**
 * Check if a given object implements the FacilityProfileData interface.
 */
export function instanceOfFacilityProfileData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FacilityProfileDataFromJSON(json: any): FacilityProfileData {
    return FacilityProfileDataFromJSONTyped(json, false);
}

export function FacilityProfileDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityProfileData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'postcode': !exists(json, 'postcode') ? undefined : json['postcode'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'website': !exists(json, 'website') ? undefined : json['website'],
    };
}

export function FacilityProfileDataToJSON(value?: FacilityProfileData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'phone': value.phone,
        'address': value.address,
        'city': value.city,
        'postcode': value.postcode,
        'state': value.state,
        'country': value.country,
        'website': value.website,
    };
}

