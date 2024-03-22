/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SessionData } from './SessionData';
import {
    SessionDataFromJSON,
    SessionDataFromJSONTyped,
    SessionDataToJSON,
} from './SessionData';

/**
 * 
 * @export
 * @interface KioskSessionResponse
 */
export interface KioskSessionResponse {
    /**
     * 
     * @type {SessionData}
     * @memberof KioskSessionResponse
     */
    session: SessionData;
}

/**
 * Check if a given object implements the KioskSessionResponse interface.
 */
export function instanceOfKioskSessionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "session" in value;

    return isInstance;
}

export function KioskSessionResponseFromJSON(json: any): KioskSessionResponse {
    return KioskSessionResponseFromJSONTyped(json, false);
}

export function KioskSessionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): KioskSessionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'session': SessionDataFromJSON(json['session']),
    };
}

export function KioskSessionResponseToJSON(value?: KioskSessionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'session': SessionDataToJSON(value.session),
    };
}

