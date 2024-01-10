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
 * @interface FacilityAccessControlKioskData
 */
export interface FacilityAccessControlKioskData {
    /**
     * 
     * @type {boolean}
     * @memberof FacilityAccessControlKioskData
     */
    kioskModeAllowed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityAccessControlKioskData
     */
    isKioskModeAllowed: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityAccessControlKioskData
     */
    isFingerprintAuthenticationAllowed: boolean;
    /**
     * 
     * @type {string}
     * @memberof FacilityAccessControlKioskData
     */
    primaryIdentification: FacilityAccessControlKioskDataPrimaryIdentificationEnum;
    /**
     * 
     * @type {string}
     * @memberof FacilityAccessControlKioskData
     */
    secondaryIdentification: FacilityAccessControlKioskDataSecondaryIdentificationEnum;
}


/**
 * @export
 */
export const FacilityAccessControlKioskDataPrimaryIdentificationEnum = {
    Uuid: 'uuid',
    MemberIdentifier: 'memberIdentifier',
    EmailAddress: 'emailAddress',
    FullName: 'fullName'
} as const;
export type FacilityAccessControlKioskDataPrimaryIdentificationEnum = typeof FacilityAccessControlKioskDataPrimaryIdentificationEnum[keyof typeof FacilityAccessControlKioskDataPrimaryIdentificationEnum];

/**
 * @export
 */
export const FacilityAccessControlKioskDataSecondaryIdentificationEnum = {
    Uuid: 'uuid',
    MemberIdentifier: 'memberIdentifier',
    None: 'none',
    YearOfBirth: 'yearOfBirth',
    MemberSecret: 'memberSecret'
} as const;
export type FacilityAccessControlKioskDataSecondaryIdentificationEnum = typeof FacilityAccessControlKioskDataSecondaryIdentificationEnum[keyof typeof FacilityAccessControlKioskDataSecondaryIdentificationEnum];


/**
 * Check if a given object implements the FacilityAccessControlKioskData interface.
 */
export function instanceOfFacilityAccessControlKioskData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "isKioskModeAllowed" in value;
    isInstance = isInstance && "isFingerprintAuthenticationAllowed" in value;
    isInstance = isInstance && "primaryIdentification" in value;
    isInstance = isInstance && "secondaryIdentification" in value;

    return isInstance;
}

export function FacilityAccessControlKioskDataFromJSON(json: any): FacilityAccessControlKioskData {
    return FacilityAccessControlKioskDataFromJSONTyped(json, false);
}

export function FacilityAccessControlKioskDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityAccessControlKioskData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kioskModeAllowed': !exists(json, 'kioskModeAllowed') ? undefined : json['kioskModeAllowed'],
        'isKioskModeAllowed': json['isKioskModeAllowed'],
        'isFingerprintAuthenticationAllowed': json['isFingerprintAuthenticationAllowed'],
        'primaryIdentification': json['primaryIdentification'],
        'secondaryIdentification': json['secondaryIdentification'],
    };
}

export function FacilityAccessControlKioskDataToJSON(value?: FacilityAccessControlKioskData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kioskModeAllowed': value.kioskModeAllowed,
        'isKioskModeAllowed': value.isKioskModeAllowed,
        'isFingerprintAuthenticationAllowed': value.isFingerprintAuthenticationAllowed,
        'primaryIdentification': value.primaryIdentification,
        'secondaryIdentification': value.secondaryIdentification,
    };
}

