/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.32
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { OAuthServiceData } from './OAuthServiceData';
import {
    OAuthServiceDataFromJSON,
    OAuthServiceDataFromJSONTyped,
    OAuthServiceDataToJSON,
} from './OAuthServiceData';
import type { OAuthServiceListResponseMeta } from './OAuthServiceListResponseMeta';
import {
    OAuthServiceListResponseMetaFromJSON,
    OAuthServiceListResponseMetaFromJSONTyped,
    OAuthServiceListResponseMetaToJSON,
} from './OAuthServiceListResponseMeta';

/**
 * 
 * @export
 * @interface OAuthServiceListResponse
 */
export interface OAuthServiceListResponse {
    /**
     * 
     * @type {Array<OAuthServiceData>}
     * @memberof OAuthServiceListResponse
     */
    oauthServices: Array<OAuthServiceData>;
    /**
     * 
     * @type {OAuthServiceListResponseMeta}
     * @memberof OAuthServiceListResponse
     */
    oauthServicesMeta: OAuthServiceListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof OAuthServiceListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof OAuthServiceListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the OAuthServiceListResponse interface.
 */
export function instanceOfOAuthServiceListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "oauthServices" in value;
    isInstance = isInstance && "oauthServicesMeta" in value;

    return isInstance;
}

export function OAuthServiceListResponseFromJSON(json: any): OAuthServiceListResponse {
    return OAuthServiceListResponseFromJSONTyped(json, false);
}

export function OAuthServiceListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuthServiceListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'oauthServices': ((json['oauthServices'] as Array<any>).map(OAuthServiceDataFromJSON)),
        'oauthServicesMeta': OAuthServiceListResponseMetaFromJSON(json['oauthServicesMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function OAuthServiceListResponseToJSON(value?: OAuthServiceListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'oauthServices': ((value.oauthServices as Array<any>).map(OAuthServiceDataToJSON)),
        'oauthServicesMeta': OAuthServiceListResponseMetaToJSON(value.oauthServicesMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

