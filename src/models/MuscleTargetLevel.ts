/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.33
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
export const MuscleTargetLevel = {
    Primary: 'primary',
    Secondary: 'secondary',
    Stabilizer: 'stabilizer'
} as const;
export type MuscleTargetLevel = typeof MuscleTargetLevel[keyof typeof MuscleTargetLevel];


export function MuscleTargetLevelFromJSON(json: any): MuscleTargetLevel {
    return MuscleTargetLevelFromJSONTyped(json, false);
}

export function MuscleTargetLevelFromJSONTyped(json: any, ignoreDiscriminator: boolean): MuscleTargetLevel {
    return json as MuscleTargetLevel;
}

export function MuscleTargetLevelToJSON(value?: MuscleTargetLevel | null): any {
    return value as any;
}

