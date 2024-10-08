/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.33
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
 * @interface FacilityInBodyIntegrationData
 */
export interface FacilityInBodyIntegrationData {
    /**
     * 
     * @type {string}
     * @memberof FacilityInBodyIntegrationData
     */
    type: FacilityInBodyIntegrationDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FacilityInBodyIntegrationData
     */
    account?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityInBodyIntegrationData
     */
    key?: string;
}


/**
 * @export
 */
export const FacilityInBodyIntegrationDataTypeEnum = {
    Local: 'local',
    Web: 'web'
} as const;
export type FacilityInBodyIntegrationDataTypeEnum = typeof FacilityInBodyIntegrationDataTypeEnum[keyof typeof FacilityInBodyIntegrationDataTypeEnum];


/**
 * Check if a given object implements the FacilityInBodyIntegrationData interface.
 */
export function instanceOfFacilityInBodyIntegrationData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function FacilityInBodyIntegrationDataFromJSON(json: any): FacilityInBodyIntegrationData {
    return FacilityInBodyIntegrationDataFromJSONTyped(json, false);
}

export function FacilityInBodyIntegrationDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityInBodyIntegrationData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'account': !exists(json, 'account') ? undefined : json['account'],
        'key': !exists(json, 'key') ? undefined : json['key'],
    };
}

export function FacilityInBodyIntegrationDataToJSON(value?: FacilityInBodyIntegrationData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'account': value.account,
        'key': value.key,
    };
}

