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
import type { DevelopmentAccountData } from './DevelopmentAccountData';
import {
    DevelopmentAccountDataFromJSON,
    DevelopmentAccountDataFromJSONTyped,
    DevelopmentAccountDataToJSON,
} from './DevelopmentAccountData';
import type { DevelopmentAccountListResponseMeta } from './DevelopmentAccountListResponseMeta';
import {
    DevelopmentAccountListResponseMetaFromJSON,
    DevelopmentAccountListResponseMetaFromJSONTyped,
    DevelopmentAccountListResponseMetaToJSON,
} from './DevelopmentAccountListResponseMeta';

/**
 * 
 * @export
 * @interface DevelopmentAccountListResponse
 */
export interface DevelopmentAccountListResponse {
    /**
     * 
     * @type {Array<DevelopmentAccountData>}
     * @memberof DevelopmentAccountListResponse
     */
    developmentAccounts: Array<DevelopmentAccountData>;
    /**
     * 
     * @type {DevelopmentAccountListResponseMeta}
     * @memberof DevelopmentAccountListResponse
     */
    developmentAccountsMeta: DevelopmentAccountListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the DevelopmentAccountListResponse interface.
 */
export function instanceOfDevelopmentAccountListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "developmentAccounts" in value;
    isInstance = isInstance && "developmentAccountsMeta" in value;

    return isInstance;
}

export function DevelopmentAccountListResponseFromJSON(json: any): DevelopmentAccountListResponse {
    return DevelopmentAccountListResponseFromJSONTyped(json, false);
}

export function DevelopmentAccountListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevelopmentAccountListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'developmentAccounts': ((json['developmentAccounts'] as Array<any>).map(DevelopmentAccountDataFromJSON)),
        'developmentAccountsMeta': DevelopmentAccountListResponseMetaFromJSON(json['developmentAccountsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function DevelopmentAccountListResponseToJSON(value?: DevelopmentAccountListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'developmentAccounts': ((value.developmentAccounts as Array<any>).map(DevelopmentAccountDataToJSON)),
        'developmentAccountsMeta': DevelopmentAccountListResponseMetaToJSON(value.developmentAccountsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

