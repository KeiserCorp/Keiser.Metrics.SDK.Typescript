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


/**
 * 
 * @export
 */
export const EmailAddressSorting = {
    Id: 'id',
    Email: 'email'
} as const;
export type EmailAddressSorting = typeof EmailAddressSorting[keyof typeof EmailAddressSorting];


export function EmailAddressSortingFromJSON(json: any): EmailAddressSorting {
    return EmailAddressSortingFromJSONTyped(json, false);
}

export function EmailAddressSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailAddressSorting {
    return json as EmailAddressSorting;
}

export function EmailAddressSortingToJSON(value?: EmailAddressSorting | null): any {
    return value as any;
}

