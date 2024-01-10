/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.18
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ApplicationData } from './ApplicationData';
import {
    ApplicationDataFromJSON,
    ApplicationDataFromJSONTyped,
    ApplicationDataToJSON,
} from './ApplicationData';

/**
 * 
 * @export
 * @interface ApplicationResponse
 */
export interface ApplicationResponse {
    /**
     * 
     * @type {ApplicationData}
     * @memberof ApplicationResponse
     */
    application: ApplicationData;
    /**
     * 
     * @type {string}
     * @memberof ApplicationResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the ApplicationResponse interface.
 */
export function instanceOfApplicationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "application" in value;

    return isInstance;
}

export function ApplicationResponseFromJSON(json: any): ApplicationResponse {
    return ApplicationResponseFromJSONTyped(json, false);
}

export function ApplicationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'application': ApplicationDataFromJSON(json['application']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function ApplicationResponseToJSON(value?: ApplicationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'application': ApplicationDataToJSON(value.application),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

