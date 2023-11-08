/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DevelopmentAccountRelationshipRequestData } from './DevelopmentAccountRelationshipRequestData';
import {
    DevelopmentAccountRelationshipRequestDataFromJSON,
    DevelopmentAccountRelationshipRequestDataFromJSONTyped,
    DevelopmentAccountRelationshipRequestDataToJSON,
} from './DevelopmentAccountRelationshipRequestData';

/**
 * 
 * @export
 * @interface DevelopmentAccountRelationshipRequestResponse
 */
export interface DevelopmentAccountRelationshipRequestResponse {
    /**
     * 
     * @type {DevelopmentAccountRelationshipRequestData}
     * @memberof DevelopmentAccountRelationshipRequestResponse
     */
    developmentAccountRelationshipRequest: DevelopmentAccountRelationshipRequestData;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountRelationshipRequestResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountRelationshipRequestResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the DevelopmentAccountRelationshipRequestResponse interface.
 */
export function instanceOfDevelopmentAccountRelationshipRequestResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "developmentAccountRelationshipRequest" in value;

    return isInstance;
}

export function DevelopmentAccountRelationshipRequestResponseFromJSON(json: any): DevelopmentAccountRelationshipRequestResponse {
    return DevelopmentAccountRelationshipRequestResponseFromJSONTyped(json, false);
}

export function DevelopmentAccountRelationshipRequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevelopmentAccountRelationshipRequestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'developmentAccountRelationshipRequest': DevelopmentAccountRelationshipRequestDataFromJSON(json['developmentAccountRelationshipRequest']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function DevelopmentAccountRelationshipRequestResponseToJSON(value?: DevelopmentAccountRelationshipRequestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'developmentAccountRelationshipRequest': DevelopmentAccountRelationshipRequestDataToJSON(value.developmentAccountRelationshipRequest),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

