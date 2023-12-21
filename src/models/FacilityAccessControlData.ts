/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.14
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
import type { FacilityAccessControlKioskData } from './FacilityAccessControlKioskData';
import {
    FacilityAccessControlKioskDataFromJSON,
    FacilityAccessControlKioskDataFromJSONTyped,
    FacilityAccessControlKioskDataToJSON,
} from './FacilityAccessControlKioskData';

/**
 * 
 * @export
 * @interface FacilityAccessControlData
 */
export interface FacilityAccessControlData {
    /**
     * 
     * @type {Array<FacilityAccessControlIPRangeData>}
     * @memberof FacilityAccessControlData
     */
    facilityAccessControlIPRanges?: Array<FacilityAccessControlIPRangeData>;
    /**
     * 
     * @type {FacilityAccessControlKioskData}
     * @memberof FacilityAccessControlData
     */
    facilityAccessControlKiosk?: FacilityAccessControlKioskData;
}

/**
 * Check if a given object implements the FacilityAccessControlData interface.
 */
export function instanceOfFacilityAccessControlData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FacilityAccessControlDataFromJSON(json: any): FacilityAccessControlData {
    return FacilityAccessControlDataFromJSONTyped(json, false);
}

export function FacilityAccessControlDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityAccessControlData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityAccessControlIPRanges': !exists(json, 'facilityAccessControlIPRanges') ? undefined : ((json['facilityAccessControlIPRanges'] as Array<any>).map(FacilityAccessControlIPRangeDataFromJSON)),
        'facilityAccessControlKiosk': !exists(json, 'facilityAccessControlKiosk') ? undefined : FacilityAccessControlKioskDataFromJSON(json['facilityAccessControlKiosk']),
    };
}

export function FacilityAccessControlDataToJSON(value?: FacilityAccessControlData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityAccessControlIPRanges': value.facilityAccessControlIPRanges === undefined ? undefined : ((value.facilityAccessControlIPRanges as Array<any>).map(FacilityAccessControlIPRangeDataToJSON)),
        'facilityAccessControlKiosk': FacilityAccessControlKioskDataToJSON(value.facilityAccessControlKiosk),
    };
}

