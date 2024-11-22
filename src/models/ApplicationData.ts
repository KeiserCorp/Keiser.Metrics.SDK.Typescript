/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.34
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UserApplicationAuthorizationData } from './UserApplicationAuthorizationData';
import {
    UserApplicationAuthorizationDataFromJSON,
    UserApplicationAuthorizationDataFromJSONTyped,
    UserApplicationAuthorizationDataToJSON,
} from './UserApplicationAuthorizationData';

/**
 * 
 * @export
 * @interface ApplicationData
 */
export interface ApplicationData {
    /**
     * 
     * @type {number}
     * @memberof ApplicationData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationData
     */
    developmentAccountId: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationData
     */
    applicationName?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationData
     */
    redirectUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationData
     */
    clientId: string;
    /**
     * 
     * @type {Array<UserApplicationAuthorizationData>}
     * @memberof ApplicationData
     */
    userApplicationAuthorizations?: Array<UserApplicationAuthorizationData>;
    /**
     * 
     * @type {string}
     * @memberof ApplicationData
     */
    clientSecret?: string;
}

/**
 * Check if a given object implements the ApplicationData interface.
 */
export function instanceOfApplicationData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "developmentAccountId" in value;
    isInstance = isInstance && "clientId" in value;

    return isInstance;
}

export function ApplicationDataFromJSON(json: any): ApplicationData {
    return ApplicationDataFromJSONTyped(json, false);
}

export function ApplicationDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'developmentAccountId': json['developmentAccountId'],
        'applicationName': !exists(json, 'applicationName') ? undefined : json['applicationName'],
        'redirectUrl': !exists(json, 'redirectUrl') ? undefined : json['redirectUrl'],
        'clientId': json['clientId'],
        'userApplicationAuthorizations': !exists(json, 'userApplicationAuthorizations') ? undefined : ((json['userApplicationAuthorizations'] as Array<any>).map(UserApplicationAuthorizationDataFromJSON)),
        'clientSecret': !exists(json, 'clientSecret') ? undefined : json['clientSecret'],
    };
}

export function ApplicationDataToJSON(value?: ApplicationData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'developmentAccountId': value.developmentAccountId,
        'applicationName': value.applicationName,
        'redirectUrl': value.redirectUrl,
        'clientId': value.clientId,
        'userApplicationAuthorizations': value.userApplicationAuthorizations === undefined ? undefined : ((value.userApplicationAuthorizations as Array<any>).map(UserApplicationAuthorizationDataToJSON)),
        'clientSecret': value.clientSecret,
    };
}

