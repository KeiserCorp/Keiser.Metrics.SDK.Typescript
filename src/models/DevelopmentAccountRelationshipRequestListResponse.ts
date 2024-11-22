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
import type { DevelopmentAccountRelationshipRequestData } from './DevelopmentAccountRelationshipRequestData';
import {
    DevelopmentAccountRelationshipRequestDataFromJSON,
    DevelopmentAccountRelationshipRequestDataFromJSONTyped,
    DevelopmentAccountRelationshipRequestDataToJSON,
} from './DevelopmentAccountRelationshipRequestData';
import type { DevelopmentAccountRelationshipRequestListResponseMeta } from './DevelopmentAccountRelationshipRequestListResponseMeta';
import {
    DevelopmentAccountRelationshipRequestListResponseMetaFromJSON,
    DevelopmentAccountRelationshipRequestListResponseMetaFromJSONTyped,
    DevelopmentAccountRelationshipRequestListResponseMetaToJSON,
} from './DevelopmentAccountRelationshipRequestListResponseMeta';

/**
 * 
 * @export
 * @interface DevelopmentAccountRelationshipRequestListResponse
 */
export interface DevelopmentAccountRelationshipRequestListResponse {
    /**
     * 
     * @type {Array<DevelopmentAccountRelationshipRequestData>}
     * @memberof DevelopmentAccountRelationshipRequestListResponse
     */
    developmentAccountRelationshipRequests: Array<DevelopmentAccountRelationshipRequestData>;
    /**
     * 
     * @type {DevelopmentAccountRelationshipRequestListResponseMeta}
     * @memberof DevelopmentAccountRelationshipRequestListResponse
     */
    developmentAccountRelationshipRequestsMeta: DevelopmentAccountRelationshipRequestListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountRelationshipRequestListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountRelationshipRequestListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the DevelopmentAccountRelationshipRequestListResponse interface.
 */
export function instanceOfDevelopmentAccountRelationshipRequestListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "developmentAccountRelationshipRequests" in value;
    isInstance = isInstance && "developmentAccountRelationshipRequestsMeta" in value;

    return isInstance;
}

export function DevelopmentAccountRelationshipRequestListResponseFromJSON(json: any): DevelopmentAccountRelationshipRequestListResponse {
    return DevelopmentAccountRelationshipRequestListResponseFromJSONTyped(json, false);
}

export function DevelopmentAccountRelationshipRequestListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevelopmentAccountRelationshipRequestListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'developmentAccountRelationshipRequests': ((json['developmentAccountRelationshipRequests'] as Array<any>).map(DevelopmentAccountRelationshipRequestDataFromJSON)),
        'developmentAccountRelationshipRequestsMeta': DevelopmentAccountRelationshipRequestListResponseMetaFromJSON(json['developmentAccountRelationshipRequestsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function DevelopmentAccountRelationshipRequestListResponseToJSON(value?: DevelopmentAccountRelationshipRequestListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'developmentAccountRelationshipRequests': ((value.developmentAccountRelationshipRequests as Array<any>).map(DevelopmentAccountRelationshipRequestDataToJSON)),
        'developmentAccountRelationshipRequestsMeta': DevelopmentAccountRelationshipRequestListResponseMetaToJSON(value.developmentAccountRelationshipRequestsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

