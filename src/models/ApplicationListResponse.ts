/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.30
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
import type { ApplicationListResponseMeta } from './ApplicationListResponseMeta';
import {
    ApplicationListResponseMetaFromJSON,
    ApplicationListResponseMetaFromJSONTyped,
    ApplicationListResponseMetaToJSON,
} from './ApplicationListResponseMeta';

/**
 * 
 * @export
 * @interface ApplicationListResponse
 */
export interface ApplicationListResponse {
    /**
     * 
     * @type {Array<ApplicationData>}
     * @memberof ApplicationListResponse
     */
    applications: Array<ApplicationData>;
    /**
     * 
     * @type {ApplicationListResponseMeta}
     * @memberof ApplicationListResponse
     */
    applicationsMeta: ApplicationListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof ApplicationListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the ApplicationListResponse interface.
 */
export function instanceOfApplicationListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "applications" in value;
    isInstance = isInstance && "applicationsMeta" in value;

    return isInstance;
}

export function ApplicationListResponseFromJSON(json: any): ApplicationListResponse {
    return ApplicationListResponseFromJSONTyped(json, false);
}

export function ApplicationListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'applications': ((json['applications'] as Array<any>).map(ApplicationDataFromJSON)),
        'applicationsMeta': ApplicationListResponseMetaFromJSON(json['applicationsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function ApplicationListResponseToJSON(value?: ApplicationListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'applications': ((value.applications as Array<any>).map(ApplicationDataToJSON)),
        'applicationsMeta': ApplicationListResponseMetaToJSON(value.applicationsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

