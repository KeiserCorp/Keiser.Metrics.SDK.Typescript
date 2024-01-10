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
import type { DevelopmentAccountRelationshipData } from './DevelopmentAccountRelationshipData';
import {
    DevelopmentAccountRelationshipDataFromJSON,
    DevelopmentAccountRelationshipDataFromJSONTyped,
    DevelopmentAccountRelationshipDataToJSON,
} from './DevelopmentAccountRelationshipData';

/**
 * 
 * @export
 * @interface DevelopmentAccountRelationshipResponse
 */
export interface DevelopmentAccountRelationshipResponse {
    /**
     * 
     * @type {DevelopmentAccountRelationshipData}
     * @memberof DevelopmentAccountRelationshipResponse
     */
    developmentAccountRelationship: DevelopmentAccountRelationshipData;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountRelationshipResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountRelationshipResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the DevelopmentAccountRelationshipResponse interface.
 */
export function instanceOfDevelopmentAccountRelationshipResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "developmentAccountRelationship" in value;

    return isInstance;
}

export function DevelopmentAccountRelationshipResponseFromJSON(json: any): DevelopmentAccountRelationshipResponse {
    return DevelopmentAccountRelationshipResponseFromJSONTyped(json, false);
}

export function DevelopmentAccountRelationshipResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevelopmentAccountRelationshipResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'developmentAccountRelationship': DevelopmentAccountRelationshipDataFromJSON(json['developmentAccountRelationship']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function DevelopmentAccountRelationshipResponseToJSON(value?: DevelopmentAccountRelationshipResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'developmentAccountRelationship': DevelopmentAccountRelationshipDataToJSON(value.developmentAccountRelationship),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

