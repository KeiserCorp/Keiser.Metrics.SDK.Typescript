/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.19
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

/**
 * 
 * @export
 * @interface CardioMachineResponse
 */
export interface CardioMachineResponse {
    /**
     * 
     * @type {CardioMachineData}
     * @memberof CardioMachineResponse
     */
    cardioMachine: CardioMachineData;
    /**
     * 
     * @type {string}
     * @memberof CardioMachineResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof CardioMachineResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the CardioMachineResponse interface.
 */
export function instanceOfCardioMachineResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cardioMachine" in value;

    return isInstance;
}

export function CardioMachineResponseFromJSON(json: any): CardioMachineResponse {
    return CardioMachineResponseFromJSONTyped(json, false);
}

export function CardioMachineResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardioMachineResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cardioMachine': CardioMachineDataFromJSON(json['cardioMachine']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function CardioMachineResponseToJSON(value?: CardioMachineResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cardioMachine': CardioMachineDataToJSON(value.cardioMachine),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

