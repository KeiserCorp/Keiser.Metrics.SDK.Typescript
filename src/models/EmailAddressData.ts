/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.3
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
 * @interface EmailAddressData
 */
export interface EmailAddressData {
    /**
     * 
     * @type {number}
     * @memberof EmailAddressData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof EmailAddressData
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof EmailAddressData
     */
    email: string;
    /**
     * 
     * @type {boolean}
     * @memberof EmailAddressData
     */
    validated: boolean;
}

/**
 * Check if a given object implements the EmailAddressData interface.
 */
export function instanceOfEmailAddressData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "validated" in value;

    return isInstance;
}

export function EmailAddressDataFromJSON(json: any): EmailAddressData {
    return EmailAddressDataFromJSONTyped(json, false);
}

export function EmailAddressDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailAddressData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'email': json['email'],
        'validated': json['validated'],
    };
}

export function EmailAddressDataToJSON(value?: EmailAddressData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'email': value.email,
        'validated': value.validated,
    };
}

