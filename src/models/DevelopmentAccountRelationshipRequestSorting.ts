/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.32
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
export const DevelopmentAccountRelationshipRequestSorting = {
    Id: 'id',
    DevelopmentAccountId: 'developmentAccountId',
    Email: 'email',
    UserId: 'userId',
    Role: 'role'
} as const;
export type DevelopmentAccountRelationshipRequestSorting = typeof DevelopmentAccountRelationshipRequestSorting[keyof typeof DevelopmentAccountRelationshipRequestSorting];


export function DevelopmentAccountRelationshipRequestSortingFromJSON(json: any): DevelopmentAccountRelationshipRequestSorting {
    return DevelopmentAccountRelationshipRequestSortingFromJSONTyped(json, false);
}

export function DevelopmentAccountRelationshipRequestSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevelopmentAccountRelationshipRequestSorting {
    return json as DevelopmentAccountRelationshipRequestSorting;
}

export function DevelopmentAccountRelationshipRequestSortingToJSON(value?: DevelopmentAccountRelationshipRequestSorting | null): any {
    return value as any;
}

