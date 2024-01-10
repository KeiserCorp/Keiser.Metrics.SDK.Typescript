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
import type { FacilityConfigurationData } from './FacilityConfigurationData';
import {
    FacilityConfigurationDataFromJSON,
    FacilityConfigurationDataFromJSONTyped,
    FacilityConfigurationDataToJSON,
} from './FacilityConfigurationData';
import type { FacilityLicenseData } from './FacilityLicenseData';
import {
    FacilityLicenseDataFromJSON,
    FacilityLicenseDataFromJSONTyped,
    FacilityLicenseDataToJSON,
} from './FacilityLicenseData';
import type { FacilityProfileData } from './FacilityProfileData';
import {
    FacilityProfileDataFromJSON,
    FacilityProfileDataFromJSONTyped,
    FacilityProfileDataToJSON,
} from './FacilityProfileData';
import type { FacilityStrengthMachineConfigurationData } from './FacilityStrengthMachineConfigurationData';
import {
    FacilityStrengthMachineConfigurationDataFromJSON,
    FacilityStrengthMachineConfigurationDataFromJSONTyped,
    FacilityStrengthMachineConfigurationDataToJSON,
} from './FacilityStrengthMachineConfigurationData';

/**
 * 
 * @export
 * @interface FacilityData
 */
export interface FacilityData {
    /**
     * 
     * @type {number}
     * @memberof FacilityData
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof FacilityData
     */
    licensedUntil: Date;
    /**
     * 
     * @type {FacilityProfileData}
     * @memberof FacilityData
     */
    facilityProfile?: FacilityProfileData;
    /**
     * 
     * @type {FacilityConfigurationData}
     * @memberof FacilityData
     */
    facilityConfiguration?: FacilityConfigurationData;
    /**
     * 
     * @type {Array<FacilityLicenseData>}
     * @memberof FacilityData
     */
    facilityLicenses?: Array<FacilityLicenseData>;
    /**
     * 
     * @type {FacilityStrengthMachineConfigurationData}
     * @memberof FacilityData
     */
    facilityStrengthMachineConfiguration?: FacilityStrengthMachineConfigurationData;
}

/**
 * Check if a given object implements the FacilityData interface.
 */
export function instanceOfFacilityData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "licensedUntil" in value;

    return isInstance;
}

export function FacilityDataFromJSON(json: any): FacilityData {
    return FacilityDataFromJSONTyped(json, false);
}

export function FacilityDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'licensedUntil': (new Date(json['licensedUntil'])),
        'facilityProfile': !exists(json, 'facilityProfile') ? undefined : FacilityProfileDataFromJSON(json['facilityProfile']),
        'facilityConfiguration': !exists(json, 'facilityConfiguration') ? undefined : FacilityConfigurationDataFromJSON(json['facilityConfiguration']),
        'facilityLicenses': !exists(json, 'facilityLicenses') ? undefined : ((json['facilityLicenses'] as Array<any>).map(FacilityLicenseDataFromJSON)),
        'facilityStrengthMachineConfiguration': !exists(json, 'facilityStrengthMachineConfiguration') ? undefined : FacilityStrengthMachineConfigurationDataFromJSON(json['facilityStrengthMachineConfiguration']),
    };
}

export function FacilityDataToJSON(value?: FacilityData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'licensedUntil': (value.licensedUntil.toISOString()),
        'facilityProfile': FacilityProfileDataToJSON(value.facilityProfile),
        'facilityConfiguration': FacilityConfigurationDataToJSON(value.facilityConfiguration),
        'facilityLicenses': value.facilityLicenses === undefined ? undefined : ((value.facilityLicenses as Array<any>).map(FacilityLicenseDataToJSON)),
        'facilityStrengthMachineConfiguration': FacilityStrengthMachineConfigurationDataToJSON(value.facilityStrengthMachineConfiguration),
    };
}

