/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.12
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
export const DevelopmentAccountRelationshipSorting = {
    Id: 'id',
    UserId: 'userId',
    Role: 'role'
} as const;
export type DevelopmentAccountRelationshipSorting = typeof DevelopmentAccountRelationshipSorting[keyof typeof DevelopmentAccountRelationshipSorting];


export function DevelopmentAccountRelationshipSortingFromJSON(json: any): DevelopmentAccountRelationshipSorting {
    return DevelopmentAccountRelationshipSortingFromJSONTyped(json, false);
}

export function DevelopmentAccountRelationshipSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevelopmentAccountRelationshipSorting {
    return json as DevelopmentAccountRelationshipSorting;
}

export function DevelopmentAccountRelationshipSortingToJSON(value?: DevelopmentAccountRelationshipSorting | null): any {
    return value as any;
}

