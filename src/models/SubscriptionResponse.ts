/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.25
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
 * @interface SubscriptionResponse
 */
export interface SubscriptionResponse {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResponse
     */
    subscriptionKey: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the SubscriptionResponse interface.
 */
export function instanceOfSubscriptionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "subscriptionKey" in value;

    return isInstance;
}

export function SubscriptionResponseFromJSON(json: any): SubscriptionResponse {
    return SubscriptionResponseFromJSONTyped(json, false);
}

export function SubscriptionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subscriptionKey': json['subscriptionKey'],
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function SubscriptionResponseToJSON(value?: SubscriptionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subscriptionKey': value.subscriptionKey,
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

