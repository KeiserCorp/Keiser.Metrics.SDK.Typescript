/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.28
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
export const UserFacilityRelationshipSorting = {
    Id: 'id',
    EmployeeRole: 'employeeRole'
} as const;
export type UserFacilityRelationshipSorting = typeof UserFacilityRelationshipSorting[keyof typeof UserFacilityRelationshipSorting];


export function UserFacilityRelationshipSortingFromJSON(json: any): UserFacilityRelationshipSorting {
    return UserFacilityRelationshipSortingFromJSONTyped(json, false);
}

export function UserFacilityRelationshipSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserFacilityRelationshipSorting {
    return json as UserFacilityRelationshipSorting;
}

export function UserFacilityRelationshipSortingToJSON(value?: UserFacilityRelationshipSorting | null): any {
    return value as any;
}

