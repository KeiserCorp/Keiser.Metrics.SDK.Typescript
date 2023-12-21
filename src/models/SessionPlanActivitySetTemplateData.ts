/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.14
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
 * @interface SessionPlanActivitySetTemplateData
 */
export interface SessionPlanActivitySetTemplateData {
    /**
     * 
     * @type {string}
     * @memberof SessionPlanActivitySetTemplateData
     */
    name: string;
}

/**
 * Check if a given object implements the SessionPlanActivitySetTemplateData interface.
 */
export function instanceOfSessionPlanActivitySetTemplateData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function SessionPlanActivitySetTemplateDataFromJSON(json: any): SessionPlanActivitySetTemplateData {
    return SessionPlanActivitySetTemplateDataFromJSONTyped(json, false);
}

export function SessionPlanActivitySetTemplateDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanActivitySetTemplateData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function SessionPlanActivitySetTemplateDataToJSON(value?: SessionPlanActivitySetTemplateData | null): any {
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

