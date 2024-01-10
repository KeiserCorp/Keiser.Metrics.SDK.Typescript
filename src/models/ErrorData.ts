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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ErrorData
 */
export interface ErrorData {
    /**
     * 
     * @type {number}
     * @memberof ErrorData
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof ErrorData
     */
    explanation: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorData
     */
    message: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorData
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof ErrorData
     */
    status: number;
}

/**
 * Check if a given object implements the ErrorData interface.
 */
export function instanceOfErrorData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "explanation" in value;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function ErrorDataFromJSON(json: any): ErrorData {
    return ErrorDataFromJSONTyped(json, false);
}

export function ErrorDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'explanation': json['explanation'],
        'message': json['message'],
        'name': json['name'],
        'status': json['status'],
    };
}

export function ErrorDataToJSON(value?: ErrorData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'explanation': value.explanation,
        'message': value.message,
        'name': value.name,
        'status': value.status,
    };
}

