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


/**
 * 
 * @export
 */
export const StrengthExercisePlane = {
    Sagittal: 'sagittal',
    Frontal: 'frontal',
    Transverse: 'transverse'
} as const;
export type StrengthExercisePlane = typeof StrengthExercisePlane[keyof typeof StrengthExercisePlane];


export function StrengthExercisePlaneFromJSON(json: any): StrengthExercisePlane {
    return StrengthExercisePlaneFromJSONTyped(json, false);
}

export function StrengthExercisePlaneFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthExercisePlane {
    return json as StrengthExercisePlane;
}

export function StrengthExercisePlaneToJSON(value?: StrengthExercisePlane | null): any {
    return value as any;
}

