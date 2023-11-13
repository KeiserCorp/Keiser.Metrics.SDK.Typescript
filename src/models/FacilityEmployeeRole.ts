/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.13
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const FacilityEmployeeRole = {
    Admin: 'admin',
    CustomerSupport: 'customerSupport',
    Trainer: 'trainer',
    FrontDesk: 'frontDesk',
    Maintenance: 'maintenance'
} as const;
export type FacilityEmployeeRole = typeof FacilityEmployeeRole[keyof typeof FacilityEmployeeRole];


export function FacilityEmployeeRoleFromJSON(json: any): FacilityEmployeeRole {
    return FacilityEmployeeRoleFromJSONTyped(json, false);
}

export function FacilityEmployeeRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityEmployeeRole {
    return json as FacilityEmployeeRole;
}

export function FacilityEmployeeRoleToJSON(value?: FacilityEmployeeRole | null): any {
    return value as any;
}

