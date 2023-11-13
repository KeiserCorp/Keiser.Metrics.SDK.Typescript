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
import type { DevelopmentAccountData } from './DevelopmentAccountData';
import {
    DevelopmentAccountDataFromJSON,
    DevelopmentAccountDataFromJSONTyped,
    DevelopmentAccountDataToJSON,
} from './DevelopmentAccountData';

/**
 * 
 * @export
 * @interface DevelopmentAccountResponse
 */
export interface DevelopmentAccountResponse {
    /**
     * 
     * @type {DevelopmentAccountData}
     * @memberof DevelopmentAccountResponse
     */
    developmentAccount: DevelopmentAccountData;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the DevelopmentAccountResponse interface.
 */
export function instanceOfDevelopmentAccountResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "developmentAccount" in value;

    return isInstance;
}

export function DevelopmentAccountResponseFromJSON(json: any): DevelopmentAccountResponse {
    return DevelopmentAccountResponseFromJSONTyped(json, false);
}

export function DevelopmentAccountResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevelopmentAccountResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'developmentAccount': DevelopmentAccountDataFromJSON(json['developmentAccount']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function DevelopmentAccountResponseToJSON(value?: DevelopmentAccountResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'developmentAccount': DevelopmentAccountDataToJSON(value.developmentAccount),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

