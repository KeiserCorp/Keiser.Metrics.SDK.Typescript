/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.8
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
export const FacilityUserRelationshipSorting = {
    Id: 'id',
    Name: 'name',
    MemberIdentifier: 'memberIdentifier',
    EmployeeRole: 'employeeRole'
} as const;
export type FacilityUserRelationshipSorting = typeof FacilityUserRelationshipSorting[keyof typeof FacilityUserRelationshipSorting];


export function FacilityUserRelationshipSortingFromJSON(json: any): FacilityUserRelationshipSorting {
    return FacilityUserRelationshipSortingFromJSONTyped(json, false);
}

export function FacilityUserRelationshipSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityUserRelationshipSorting {
    return json as FacilityUserRelationshipSorting;
}

export function FacilityUserRelationshipSortingToJSON(value?: FacilityUserRelationshipSorting | null): any {
    return value as any;
}

