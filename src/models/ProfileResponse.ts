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
import type { ProfileData } from './ProfileData';
import {
    ProfileDataFromJSON,
    ProfileDataFromJSONTyped,
    ProfileDataToJSON,
} from './ProfileData';

/**
 * 
 * @export
 * @interface ProfileResponse
 */
export interface ProfileResponse {
    /**
     * 
     * @type {ProfileData}
     * @memberof ProfileResponse
     */
    profile: ProfileData;
    /**
     * 
     * @type {string}
     * @memberof ProfileResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the ProfileResponse interface.
 */
export function instanceOfProfileResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "profile" in value;

    return isInstance;
}

export function ProfileResponseFromJSON(json: any): ProfileResponse {
    return ProfileResponseFromJSONTyped(json, false);
}

export function ProfileResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'profile': ProfileDataFromJSON(json['profile']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function ProfileResponseToJSON(value?: ProfileResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'profile': ProfileDataToJSON(value.profile),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

