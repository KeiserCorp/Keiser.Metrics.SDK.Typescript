/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.5
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
 * @interface FacilityCardioMachineData
 */
export interface FacilityCardioMachineData {
    /**
     * 
     * @type {number}
     * @memberof FacilityCardioMachineData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof FacilityCardioMachineData
     */
    model: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityCardioMachineData
     */
    version: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityCardioMachineData
     */
    serial: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityCardioMachineData
     */
    location?: string;
    /**
     * 
     * @type {CardioMachineData}
     * @memberof FacilityCardioMachineData
     */
    cardioMachine?: CardioMachineData;
}

/**
 * Check if a given object implements the FacilityCardioMachineData interface.
 */
export function instanceOfFacilityCardioMachineData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "model" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "serial" in value;

    return isInstance;
}

export function FacilityCardioMachineDataFromJSON(json: any): FacilityCardioMachineData {
    return FacilityCardioMachineDataFromJSONTyped(json, false);
}

export function FacilityCardioMachineDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityCardioMachineData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'model': json['model'],
        'version': json['version'],
        'serial': json['serial'],
        'location': !exists(json, 'location') ? undefined : json['location'],
        'cardioMachine': !exists(json, 'cardioMachine') ? undefined : CardioMachineDataFromJSON(json['cardioMachine']),
    };
}

export function FacilityCardioMachineDataToJSON(value?: FacilityCardioMachineData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'model': value.model,
        'version': value.version,
        'serial': value.serial,
        'location': value.location,
        'cardioMachine': CardioMachineDataToJSON(value.cardioMachine),
    };
}

