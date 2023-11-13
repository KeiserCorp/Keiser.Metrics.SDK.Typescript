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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface A500GetUserData
 */
export interface A500GetUserData {
    /**
     * 
     * @type {number}
     * @memberof A500GetUserData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof A500GetUserData
     */
    memberIdentifier: string;
    /**
     * 
     * @type {string}
     * @memberof A500GetUserData
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof A500GetUserData
     */
    units: string;
}

/**
 * Check if a given object implements the A500GetUserData interface.
 */
export function instanceOfA500GetUserData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "memberIdentifier" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "units" in value;

    return isInstance;
}

export function A500GetUserDataFromJSON(json: any): A500GetUserData {
    return A500GetUserDataFromJSONTyped(json, false);
}

export function A500GetUserDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): A500GetUserData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'memberIdentifier': json['memberIdentifier'],
        'name': json['name'],
        'units': json['units'],
    };
}

export function A500GetUserDataToJSON(value?: A500GetUserData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'memberIdentifier': value.memberIdentifier,
        'name': value.name,
        'units': value.units,
    };
}

