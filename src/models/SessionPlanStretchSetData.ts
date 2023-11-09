/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SessionPlanStretchSetData
 */
export interface SessionPlanStretchSetData {
    /**
     * 
     * @type {string}
     * @memberof SessionPlanStretchSetData
     */
    name: string;
}

/**
 * Check if a given object implements the SessionPlanStretchSetData interface.
 */
export function instanceOfSessionPlanStretchSetData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function SessionPlanStretchSetDataFromJSON(json: any): SessionPlanStretchSetData {
    return SessionPlanStretchSetDataFromJSONTyped(json, false);
}

export function SessionPlanStretchSetDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanStretchSetData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function SessionPlanStretchSetDataToJSON(value?: SessionPlanStretchSetData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

