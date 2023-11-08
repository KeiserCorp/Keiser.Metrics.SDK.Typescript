/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CardioMachineData } from './CardioMachineData';
import {
    CardioMachineDataFromJSON,
    CardioMachineDataFromJSONTyped,
    CardioMachineDataToJSON,
} from './CardioMachineData';
import type { CardioMachineListResponseMeta } from './CardioMachineListResponseMeta';
import {
    CardioMachineListResponseMetaFromJSON,
    CardioMachineListResponseMetaFromJSONTyped,
    CardioMachineListResponseMetaToJSON,
} from './CardioMachineListResponseMeta';

/**
 * 
 * @export
 * @interface CardioMachineListResponse
 */
export interface CardioMachineListResponse {
    /**
     * 
     * @type {Array<CardioMachineData>}
     * @memberof CardioMachineListResponse
     */
    cardioMachines: Array<CardioMachineData>;
    /**
     * 
     * @type {CardioMachineListResponseMeta}
     * @memberof CardioMachineListResponse
     */
    cardioMachinesMeta: CardioMachineListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof CardioMachineListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof CardioMachineListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the CardioMachineListResponse interface.
 */
export function instanceOfCardioMachineListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cardioMachines" in value;
    isInstance = isInstance && "cardioMachinesMeta" in value;

    return isInstance;
}

export function CardioMachineListResponseFromJSON(json: any): CardioMachineListResponse {
    return CardioMachineListResponseFromJSONTyped(json, false);
}

export function CardioMachineListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardioMachineListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cardioMachines': ((json['cardioMachines'] as Array<any>).map(CardioMachineDataFromJSON)),
        'cardioMachinesMeta': CardioMachineListResponseMetaFromJSON(json['cardioMachinesMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function CardioMachineListResponseToJSON(value?: CardioMachineListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cardioMachines': ((value.cardioMachines as Array<any>).map(CardioMachineDataToJSON)),
        'cardioMachinesMeta': CardioMachineListResponseMetaToJSON(value.cardioMachinesMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

