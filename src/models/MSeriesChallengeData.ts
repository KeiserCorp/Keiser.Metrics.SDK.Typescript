/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.31
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
 * @interface MSeriesChallengeData
 */
export interface MSeriesChallengeData {
    /**
     * 
     * @type {number}
     * @memberof MSeriesChallengeData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesChallengeData
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof MSeriesChallengeData
     */
    joinCode: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesChallengeData
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof MSeriesChallengeData
     */
    isPublic: boolean;
    /**
     * 
     * @type {number}
     * @memberof MSeriesChallengeData
     */
    userLimit?: number;
    /**
     * 
     * @type {string}
     * @memberof MSeriesChallengeData
     */
    challengeType: MSeriesChallengeDataChallengeTypeEnum;
    /**
     * 
     * @type {Date}
     * @memberof MSeriesChallengeData
     */
    startAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof MSeriesChallengeData
     */
    endAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof MSeriesChallengeData
     */
    focus: MSeriesChallengeDataFocusEnum;
    /**
     * 
     * @type {number}
     * @memberof MSeriesChallengeData
     */
    goal: number;
    /**
     * 
     * @type {boolean}
     * @memberof MSeriesChallengeData
     */
    isCompleted: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MSeriesChallengeData
     */
    isJoined?: boolean;
}


/**
 * @export
 */
export const MSeriesChallengeDataChallengeTypeEnum = {
    TimeBased: 'timeBased',
    GoalBased: 'goalBased'
} as const;
export type MSeriesChallengeDataChallengeTypeEnum = typeof MSeriesChallengeDataChallengeTypeEnum[keyof typeof MSeriesChallengeDataChallengeTypeEnum];

/**
 * @export
 */
export const MSeriesChallengeDataFocusEnum = {
    Points: 'points',
    CaloricBurn: 'caloricBurn',
    Distance: 'distance',
    Duration: 'duration'
} as const;
export type MSeriesChallengeDataFocusEnum = typeof MSeriesChallengeDataFocusEnum[keyof typeof MSeriesChallengeDataFocusEnum];


/**
 * Check if a given object implements the MSeriesChallengeData interface.
 */
export function instanceOfMSeriesChallengeData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "joinCode" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "isPublic" in value;
    isInstance = isInstance && "challengeType" in value;
    isInstance = isInstance && "startAt" in value;
    isInstance = isInstance && "focus" in value;
    isInstance = isInstance && "goal" in value;
    isInstance = isInstance && "isCompleted" in value;

    return isInstance;
}

export function MSeriesChallengeDataFromJSON(json: any): MSeriesChallengeData {
    return MSeriesChallengeDataFromJSONTyped(json, false);
}

export function MSeriesChallengeDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesChallengeData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'joinCode': json['joinCode'],
        'name': json['name'],
        'isPublic': json['isPublic'],
        'userLimit': !exists(json, 'userLimit') ? undefined : json['userLimit'],
        'challengeType': json['challengeType'],
        'startAt': (new Date(json['startAt'])),
        'endAt': !exists(json, 'endAt') ? undefined : (new Date(json['endAt'])),
        'focus': json['focus'],
        'goal': json['goal'],
        'isCompleted': json['isCompleted'],
        'isJoined': !exists(json, 'isJoined') ? undefined : json['isJoined'],
    };
}

export function MSeriesChallengeDataToJSON(value?: MSeriesChallengeData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'joinCode': value.joinCode,
        'name': value.name,
        'isPublic': value.isPublic,
        'userLimit': value.userLimit,
        'challengeType': value.challengeType,
        'startAt': (value.startAt.toISOString()),
        'endAt': value.endAt === undefined ? undefined : (value.endAt.toISOString()),
        'focus': value.focus,
        'goal': value.goal,
        'isCompleted': value.isCompleted,
        'isJoined': value.isJoined,
    };
}

