/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.26
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
import type { DevelopmentAccountRelationshipListResponseMeta } from './DevelopmentAccountRelationshipListResponseMeta';
import {
    DevelopmentAccountRelationshipListResponseMetaFromJSON,
    DevelopmentAccountRelationshipListResponseMetaFromJSONTyped,
    DevelopmentAccountRelationshipListResponseMetaToJSON,
} from './DevelopmentAccountRelationshipListResponseMeta';

/**
 * 
 * @export
 * @interface DevelopmentAccountRelationshipListResponse
 */
export interface DevelopmentAccountRelationshipListResponse {
    /**
     * 
     * @type {Array<DevelopmentAccountRelationshipData>}
     * @memberof DevelopmentAccountRelationshipListResponse
     */
    developmentAccountRelationships: Array<DevelopmentAccountRelationshipData>;
    /**
     * 
     * @type {DevelopmentAccountRelationshipListResponseMeta}
     * @memberof DevelopmentAccountRelationshipListResponse
     */
    developmentAccountRelationshipsMeta: DevelopmentAccountRelationshipListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountRelationshipListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountRelationshipListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the DevelopmentAccountRelationshipListResponse interface.
 */
export function instanceOfDevelopmentAccountRelationshipListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "developmentAccountRelationships" in value;
    isInstance = isInstance && "developmentAccountRelationshipsMeta" in value;

    return isInstance;
}

export function DevelopmentAccountRelationshipListResponseFromJSON(json: any): DevelopmentAccountRelationshipListResponse {
    return DevelopmentAccountRelationshipListResponseFromJSONTyped(json, false);
}

export function DevelopmentAccountRelationshipListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevelopmentAccountRelationshipListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'developmentAccountRelationships': ((json['developmentAccountRelationships'] as Array<any>).map(DevelopmentAccountRelationshipDataFromJSON)),
        'developmentAccountRelationshipsMeta': DevelopmentAccountRelationshipListResponseMetaFromJSON(json['developmentAccountRelationshipsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function DevelopmentAccountRelationshipListResponseToJSON(value?: DevelopmentAccountRelationshipListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'developmentAccountRelationships': ((value.developmentAccountRelationships as Array<any>).map(DevelopmentAccountRelationshipDataToJSON)),
        'developmentAccountRelationshipsMeta': DevelopmentAccountRelationshipListResponseMetaToJSON(value.developmentAccountRelationshipsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

