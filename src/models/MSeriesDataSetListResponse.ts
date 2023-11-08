/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MSeriesDataSetData } from './MSeriesDataSetData';
import {
    MSeriesDataSetDataFromJSON,
    MSeriesDataSetDataFromJSONTyped,
    MSeriesDataSetDataToJSON,
} from './MSeriesDataSetData';
import type { MSeriesDataSetListResponseMeta } from './MSeriesDataSetListResponseMeta';
import {
    MSeriesDataSetListResponseMetaFromJSON,
    MSeriesDataSetListResponseMetaFromJSONTyped,
    MSeriesDataSetListResponseMetaToJSON,
} from './MSeriesDataSetListResponseMeta';

/**
 * 
 * @export
 * @interface MSeriesDataSetListResponse
 */
export interface MSeriesDataSetListResponse {
    /**
     * 
     * @type {Array<MSeriesDataSetData>}
     * @memberof MSeriesDataSetListResponse
     */
    mSeriesDataSets: Array<MSeriesDataSetData>;
    /**
     * 
     * @type {MSeriesDataSetListResponseMeta}
     * @memberof MSeriesDataSetListResponse
     */
    mSeriesDataSetsMeta: MSeriesDataSetListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof MSeriesDataSetListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesDataSetListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the MSeriesDataSetListResponse interface.
 */
export function instanceOfMSeriesDataSetListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mSeriesDataSets" in value;
    isInstance = isInstance && "mSeriesDataSetsMeta" in value;

    return isInstance;
}

export function MSeriesDataSetListResponseFromJSON(json: any): MSeriesDataSetListResponse {
    return MSeriesDataSetListResponseFromJSONTyped(json, false);
}

export function MSeriesDataSetListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesDataSetListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mSeriesDataSets': ((json['mSeriesDataSets'] as Array<any>).map(MSeriesDataSetDataFromJSON)),
        'mSeriesDataSetsMeta': MSeriesDataSetListResponseMetaFromJSON(json['mSeriesDataSetsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function MSeriesDataSetListResponseToJSON(value?: MSeriesDataSetListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mSeriesDataSets': ((value.mSeriesDataSets as Array<any>).map(MSeriesDataSetDataToJSON)),
        'mSeriesDataSetsMeta': MSeriesDataSetListResponseMetaToJSON(value.mSeriesDataSetsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

