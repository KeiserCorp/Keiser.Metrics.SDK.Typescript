/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.24
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
export const PrivilegedFacilityRelationshipRequestSorting = {
    Id: 'id',
    Name: 'name',
    MemberIdentifier: 'memberIdentifier',
    EmployeeRole: 'employeeRole'
} as const;
export type PrivilegedFacilityRelationshipRequestSorting = typeof PrivilegedFacilityRelationshipRequestSorting[keyof typeof PrivilegedFacilityRelationshipRequestSorting];


export function PrivilegedFacilityRelationshipRequestSortingFromJSON(json: any): PrivilegedFacilityRelationshipRequestSorting {
    return PrivilegedFacilityRelationshipRequestSortingFromJSONTyped(json, false);
}

export function PrivilegedFacilityRelationshipRequestSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrivilegedFacilityRelationshipRequestSorting {
    return json as PrivilegedFacilityRelationshipRequestSorting;
}

export function PrivilegedFacilityRelationshipRequestSortingToJSON(value?: PrivilegedFacilityRelationshipRequestSorting | null): any {
    return value as any;
}

