/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilitySessionListResponseMeta } from './FacilitySessionListResponseMeta';
import {
    FacilitySessionListResponseMetaFromJSON,
    FacilitySessionListResponseMetaFromJSONTyped,
    FacilitySessionListResponseMetaToJSON,
} from './FacilitySessionListResponseMeta';
import type { SessionData } from './SessionData';
import {
    SessionDataFromJSON,
    SessionDataFromJSONTyped,
    SessionDataToJSON,
} from './SessionData';

/**
 * 
 * @export
 * @interface FacilitySessionListResponse
 */
export interface FacilitySessionListResponse {
    /**
     * 
     * @type {Array<SessionData>}
     * @memberof FacilitySessionListResponse
     */
    sessions: Array<SessionData>;
    /**
     * 
     * @type {FacilitySessionListResponseMeta}
     * @memberof FacilitySessionListResponse
     */
    sessionsMeta: FacilitySessionListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof FacilitySessionListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilitySessionListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilitySessionListResponse interface.
 */
export function instanceOfFacilitySessionListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessions" in value;
    isInstance = isInstance && "sessionsMeta" in value;

    return isInstance;
}

export function FacilitySessionListResponseFromJSON(json: any): FacilitySessionListResponse {
    return FacilitySessionListResponseFromJSONTyped(json, false);
}

export function FacilitySessionListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilitySessionListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessions': ((json['sessions'] as Array<any>).map(SessionDataFromJSON)),
        'sessionsMeta': FacilitySessionListResponseMetaFromJSON(json['sessionsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilitySessionListResponseToJSON(value?: FacilitySessionListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessions': ((value.sessions as Array<any>).map(SessionDataToJSON)),
        'sessionsMeta': FacilitySessionListResponseMetaToJSON(value.sessionsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

