/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.27
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
 * @interface SessionPlanStretchSetTemplateData
 */
export interface SessionPlanStretchSetTemplateData {
    /**
     * 
     * @type {string}
     * @memberof SessionPlanStretchSetTemplateData
     */
    name: string;
}

/**
 * Check if a given object implements the SessionPlanStretchSetTemplateData interface.
 */
export function instanceOfSessionPlanStretchSetTemplateData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function SessionPlanStretchSetTemplateDataFromJSON(json: any): SessionPlanStretchSetTemplateData {
    return SessionPlanStretchSetTemplateDataFromJSONTyped(json, false);
}

export function SessionPlanStretchSetTemplateDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanStretchSetTemplateData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function SessionPlanStretchSetTemplateDataToJSON(value?: SessionPlanStretchSetTemplateData | null): any {
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

