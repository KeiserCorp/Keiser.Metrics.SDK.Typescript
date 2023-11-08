/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.4
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
 * @interface OAuthServiceData
 */
export interface OAuthServiceData {
    /**
     * 
     * @type {number}
     * @memberof OAuthServiceData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof OAuthServiceData
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof OAuthServiceData
     */
    service: string;
    /**
     * 
     * @type {string}
     * @memberof OAuthServiceData
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof OAuthServiceData
     */
    remoteUserId: string;
    /**
     * 
     * @type {string}
     * @memberof OAuthServiceData
     */
    serviceId?: string;
    /**
     * 
     * @type {Date}
     * @memberof OAuthServiceData
     */
    lastTransaction?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof OAuthServiceData
     */
    reauthRequired: boolean;
}

/**
 * Check if a given object implements the OAuthServiceData interface.
 */
export function instanceOfOAuthServiceData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "service" in value;
    isInstance = isInstance && "remoteUserId" in value;
    isInstance = isInstance && "reauthRequired" in value;

    return isInstance;
}

export function OAuthServiceDataFromJSON(json: any): OAuthServiceData {
    return OAuthServiceDataFromJSONTyped(json, false);
}

export function OAuthServiceDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuthServiceData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'service': json['service'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'remoteUserId': json['remoteUserId'],
        'serviceId': !exists(json, 'serviceId') ? undefined : json['serviceId'],
        'lastTransaction': !exists(json, 'lastTransaction') ? undefined : (new Date(json['lastTransaction'])),
        'reauthRequired': json['reauthRequired'],
    };
}

export function OAuthServiceDataToJSON(value?: OAuthServiceData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'service': value.service,
        'name': value.name,
        'remoteUserId': value.remoteUserId,
        'serviceId': value.serviceId,
        'lastTransaction': value.lastTransaction === undefined ? undefined : (value.lastTransaction.toISOString()),
        'reauthRequired': value.reauthRequired,
    };
}

