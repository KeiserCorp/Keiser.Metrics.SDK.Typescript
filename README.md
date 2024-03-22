## @keiser/metrics-sdk-typescript@5.0.28

## Project
This SDK facilitates communication between a client system (_ie: phone app, website, server_) and [Keiser Metrics](https://metrics.keiser.com). The SDK is written in [TypeScript](https://www.typescriptlang.org) and supports both [browser](https://caniuse.com/#feat=es6) and [NodeJS](https://nodejs.org) platforms.


### Installation

Navigate to the folder of your consuming project and install with [npm](https://www.npmjs.com/):

```
npm install @keiser/metrics-sdk-typescript@5.0.28 --save
```


## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript

import { MetricsApi } from '@keiser/metrics-sdk-typescript';

var api = new MetricsApi()

let body:MetricsApiA500CreateSetRequest = {
  // string
  displaySerial: displaySerial_example,
  // string
  displaySoftwareVersion: displaySoftwareVersion_example,
  // number
  facilityId: 8.14,
  // string
  memberIdentifier: memberIdentifier_example,
  // string
  model: model_example,
  // string | Allowed values: int, dec
  resistancePrecision: resistancePrecision_example,
  // string
  setData: setData_example,
  // string (optional)
  lz4SampleData: lz4SampleData_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.a500CreateSet(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}

```

## Documentation for API Endpoints

All URIs are relative to *https://metrics-api-v3.keiser.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**a500CreateSet**](docs/MetricsApi.md#a500CreateSet) | **POST** /a500/create-set | Create a user\&#39;s set on A500 equipment
[**a500CreateUtilizationInstance**](docs/MetricsApi.md#a500CreateUtilizationInstance) | **POST** /a500/utilization-instance | Create a utilization instance for an A500 machine
[**a500GetUser**](docs/MetricsApi.md#a500GetUser) | **GET** /a500/user | Get a user\&#39;s info on A500 equipment
[**a500Initialize**](docs/MetricsApi.md#a500Initialize) | **POST** /a500/initialize | Initializes a facility strength machine
[**a500ShowMachineState**](docs/MetricsApi.md#a500ShowMachineState) | **GET** /a500/{facilityStrengthMachineId}/machine-state | Show an A500 Facility Strength Machine State
[**a500SubscribeMachineState**](docs/MetricsApi.md#a500SubscribeMachineState) | **GET** /a500/subscribeMachineState | Subscribe to A500 Facility Strength Machine State
[**a500UpdateMachine**](docs/MetricsApi.md#a500UpdateMachine) | **PUT** /a500/machine | Create or update a facility strength machine
[**a500UpdateMachineState**](docs/MetricsApi.md#a500UpdateMachineState) | **PUT** /a500/{facilityStrengthMachineId}/machine-state | Updates a facility strength machine state
[**a500UserLogin**](docs/MetricsApi.md#a500UserLogin) | **POST** /a500/user-login | Login a user from an A500 Machine
[**applicationCreate**](docs/MetricsApi.md#applicationCreate) | **POST** /development-account/{developmentAccountId}/application | Create an application
[**applicationDelete**](docs/MetricsApi.md#applicationDelete) | **DELETE** /development-account/{developmentAccountId}/application/{id} | Delete an application
[**applicationList**](docs/MetricsApi.md#applicationList) | **GET** /development-account/{developmentAccountId}/application/list | List applications for a Developer Account
[**applicationShow**](docs/MetricsApi.md#applicationShow) | **GET** /development-account/{developmentAccountId}/application | Show an application
[**applicationUpdate**](docs/MetricsApi.md#applicationUpdate) | **PUT** /development-account/{developmentAccountId}/application/{id} | Update an application
[**authExchangeFulfillment**](docs/MetricsApi.md#authExchangeFulfillment) | **POST** /auth/exchange/fulfillment | Exchanges an authorization token for access and refresh tokens
[**cardioExerciseCreate**](docs/MetricsApi.md#cardioExerciseCreate) | **POST** /cardio-exercise | Create a cardio exercise
[**cardioExerciseDelete**](docs/MetricsApi.md#cardioExerciseDelete) | **DELETE** /cardio-exercise/{id} | Delete a cardio exercise
[**cardioExerciseList**](docs/MetricsApi.md#cardioExerciseList) | **GET** /cardio-exercise/list | List cardio exercises
[**cardioExerciseMuscleCreate**](docs/MetricsApi.md#cardioExerciseMuscleCreate) | **POST** /cardio-exercise/{cardioExerciseId}/muscle | Create a cardio exercise muscle
[**cardioExerciseMuscleDelete**](docs/MetricsApi.md#cardioExerciseMuscleDelete) | **DELETE** /cardio-exercise/muscle/{id} | Delete a cardio exercise muscle
[**cardioExerciseMuscleList**](docs/MetricsApi.md#cardioExerciseMuscleList) | **GET** /cardio-exercise/{cardioExerciseId}/muscle | List cardio exercise muscles
[**cardioExerciseMuscleShow**](docs/MetricsApi.md#cardioExerciseMuscleShow) | **GET** /cardio-exercise/muscle/ | Show a cardio exercise muscle
[**cardioExerciseMuscleUpdate**](docs/MetricsApi.md#cardioExerciseMuscleUpdate) | **PUT** /cardio-exercise/muscle/{id} | Update a cardio exercise muscle
[**cardioExerciseShow**](docs/MetricsApi.md#cardioExerciseShow) | **GET** /cardio-exercise | Show a cardio exercise
[**cardioExerciseUpdate**](docs/MetricsApi.md#cardioExerciseUpdate) | **PUT** /cardio-exercise/{id} | Update a cardio exercise
[**cardioExerciseVariantCreate**](docs/MetricsApi.md#cardioExerciseVariantCreate) | **POST** /cardio-exercise/{cardioExerciseId}/variant | Create a cardio exercise variant
[**cardioExerciseVariantDelete**](docs/MetricsApi.md#cardioExerciseVariantDelete) | **DELETE** /cardio-exercise/variant/{id} | Delete a cardio exercise variant
[**cardioExerciseVariantList**](docs/MetricsApi.md#cardioExerciseVariantList) | **GET** /cardio-exercise/variant/list | List cardio exercise variants
[**cardioExerciseVariantShow**](docs/MetricsApi.md#cardioExerciseVariantShow) | **GET** /cardio-exercise/variant | Show a cardio exercise variant
[**cardioExerciseVariantUpdate**](docs/MetricsApi.md#cardioExerciseVariantUpdate) | **PUT** /cardio-exercise/variant/{id} | Update a cardio exercise variant
[**cardioMachineList**](docs/MetricsApi.md#cardioMachineList) | **GET** /cardio-machine/list | List cardio machines
[**cardioMachineShow**](docs/MetricsApi.md#cardioMachineShow) | **GET** /cardio-machine | Show a cardio machine
[**coreEndpoints**](docs/MetricsApi.md#coreEndpoints) | **GET** /endpoints | Lists all endpoints for reference
[**coreErrors**](docs/MetricsApi.md#coreErrors) | **GET** /errors | Lists all errors for reference
[**coreHealth**](docs/MetricsApi.md#coreHealth) | **GET** /health | Returns 200 if healthy, 400 if unhealthy
[**coreStatus**](docs/MetricsApi.md#coreStatus) | **GET** /status | Show basic API information
[**coreTime**](docs/MetricsApi.md#coreTime) | **GET** /time | Returns current system time
[**coreUnsubscribe**](docs/MetricsApi.md#coreUnsubscribe) | **GET** /unsubscribe | Unsubscribe from model updates
[**developmentAccountCreate**](docs/MetricsApi.md#developmentAccountCreate) | **POST** /development | Create a Development Account
[**developmentAccountDelete**](docs/MetricsApi.md#developmentAccountDelete) | **DELETE** /development-account/{id} | Delete a Development Account
[**developmentAccountList**](docs/MetricsApi.md#developmentAccountList) | **GET** /development/list | List Development Accounts
[**developmentAccountRelationshipList**](docs/MetricsApi.md#developmentAccountRelationshipList) | **GET** /development-account/{developmentAccountId}/relationship/list | List User Development Account Relationships
[**developmentAccountRelationshipRequestDelete**](docs/MetricsApi.md#developmentAccountRelationshipRequestDelete) | **DELETE** /development-account/{developmentAccountId}/relationship-request/{id} | Deletes a Development Account Relationship Request
[**developmentAccountRelationshipRequestFulfillment**](docs/MetricsApi.md#developmentAccountRelationshipRequestFulfillment) | **PUT** /development-account/relationship-request/fulfillment | Fulfills a Development Account Relationship Request
[**developmentAccountRelationshipRequestInit**](docs/MetricsApi.md#developmentAccountRelationshipRequestInit) | **POST** /development-account/{developmentAccountId}/relationship-request/init | Initialize a Development Account Relationship Request
[**developmentAccountRelationshipRequestList**](docs/MetricsApi.md#developmentAccountRelationshipRequestList) | **GET** /development-account/relationship-request/list | List Development Account Relationship Requests
[**developmentAccountRelationshipRequestShow**](docs/MetricsApi.md#developmentAccountRelationshipRequestShow) | **GET** /development-account/relationship-request | Show a Development Account Relationship Request
[**developmentAccountRelationshipShow**](docs/MetricsApi.md#developmentAccountRelationshipShow) | **GET** /development-account/{developmentAccountId}/relationship | Show a User Development Account Relationship
[**developmentAccountRelationshipUpdate**](docs/MetricsApi.md#developmentAccountRelationshipUpdate) | **PUT** /development-account/{developmentAccountId}/relationship/{id} | Updates a Development Account Relationship
[**developmentAccountShow**](docs/MetricsApi.md#developmentAccountShow) | **GET** /development-account | Show a Development Account
[**developmentAccountUpdate**](docs/MetricsApi.md#developmentAccountUpdate) | **PUT** /development-account/{id} | Update a Development Account
[**emailAddressCreate**](docs/MetricsApi.md#emailAddressCreate) | **POST** /user/email-address | Create a user email
[**emailAddressDelete**](docs/MetricsApi.md#emailAddressDelete) | **DELETE** /user/email-address/{id} | Delete a user\&#39;s email address
[**emailAddressList**](docs/MetricsApi.md#emailAddressList) | **GET** /user/email-address/list | List a user\&#39;s email addresses
[**emailAddressShow**](docs/MetricsApi.md#emailAddressShow) | **GET** /user/email-address | Show a user\&#39;s email address
[**emailAddressValidationFulfillment**](docs/MetricsApi.md#emailAddressValidationFulfillment) | **POST** /user/email-address/validation-fulfillment/{validationToken} | Fulfills a user\&#39;s email validation process
[**emailAddressValidationRequest**](docs/MetricsApi.md#emailAddressValidationRequest) | **POST** /user/email-address/validation-request/{id} | Request an email validation email be sent
[**exerciseAliasCreate**](docs/MetricsApi.md#exerciseAliasCreate) | **POST** /exercise-alias | Create an exercise alias
[**exerciseAliasDelete**](docs/MetricsApi.md#exerciseAliasDelete) | **DELETE** /exercise-alias/{id} | Delete an exercise alias
[**exerciseAliasList**](docs/MetricsApi.md#exerciseAliasList) | **GET** /exercise-alias/list | List exercise aliases
[**exerciseAliasShow**](docs/MetricsApi.md#exerciseAliasShow) | **GET** /exercise-alias | Show an exercise alias
[**exerciseAliasUpdate**](docs/MetricsApi.md#exerciseAliasUpdate) | **PUT** /exercise-alias/{id} | Update an exercise alias
[**exerciseOrdinalSetAssignmentCreate**](docs/MetricsApi.md#exerciseOrdinalSetAssignmentCreate) | **POST** /exercise-ordinal-set/{exerciseOrdinalSetId}/assignment | Create an exercise ordinal set assignment
[**exerciseOrdinalSetAssignmentDelete**](docs/MetricsApi.md#exerciseOrdinalSetAssignmentDelete) | **DELETE** /exercise-ordinal-set/assignment/{id} | Delete an exercise ordinal set assignment
[**exerciseOrdinalSetAssignmentList**](docs/MetricsApi.md#exerciseOrdinalSetAssignmentList) | **GET** /exercise-ordinal-set/assignment/list | List exercise ordinal set assignments
[**exerciseOrdinalSetAssignmentShow**](docs/MetricsApi.md#exerciseOrdinalSetAssignmentShow) | **GET** /exercise-ordinal-set/assignment | Show an exercise ordinal set assignment
[**exerciseOrdinalSetCreate**](docs/MetricsApi.md#exerciseOrdinalSetCreate) | **POST** /exercise-ordinal-set | Create an exercise ordinal set
[**exerciseOrdinalSetDelete**](docs/MetricsApi.md#exerciseOrdinalSetDelete) | **DELETE** /exercise-ordinal-set/{id} | Delete an exercise ordinal set
[**exerciseOrdinalSetList**](docs/MetricsApi.md#exerciseOrdinalSetList) | **GET** /exercise-ordinal-set/list | List exercise ordinal sets
[**exerciseOrdinalSetShow**](docs/MetricsApi.md#exerciseOrdinalSetShow) | **GET** /exercise-ordinal-set | Show an exercise ordinal set
[**exerciseOrdinalSetUpdate**](docs/MetricsApi.md#exerciseOrdinalSetUpdate) | **PUT** /exercise-ordinal-set/{id} | Update an exercise ordinal set
[**facilityAccessControlIPRangeCreate**](docs/MetricsApi.md#facilityAccessControlIPRangeCreate) | **POST** /facility/access-control/ip-range | Create a facility access control IP Range whitelist entity
[**facilityAccessControlIPRangeDelete**](docs/MetricsApi.md#facilityAccessControlIPRangeDelete) | **DELETE** /facility/access-control/ip-range/{id} | Delete a facility access control IP Range whitelist entity
[**facilityAccessControlIPRangeList**](docs/MetricsApi.md#facilityAccessControlIPRangeList) | **GET** /facility/access-control/ip-range/list | List a facility\&#39;s access control IP Range whitelist entities
[**facilityAccessControlIPRangeShow**](docs/MetricsApi.md#facilityAccessControlIPRangeShow) | **GET** /facility/access-control/ip-range | Show a facility access control IP Range whitelist entity
[**facilityAccessControlIPRangeUpdate**](docs/MetricsApi.md#facilityAccessControlIPRangeUpdate) | **PUT** /facility/access-control/ip-range/{id} | Update a facility access control IP Range whitelist entity
[**facilityAccessControlKioskShow**](docs/MetricsApi.md#facilityAccessControlKioskShow) | **GET** /facility/access-control/kiosk | Show the facility access control kiosk entity
[**facilityAccessControlKioskUpdate**](docs/MetricsApi.md#facilityAccessControlKioskUpdate) | **PUT** /facility/access-control/kiosk | Update the facility access control kiosk entity
[**facilityAccessControlShow**](docs/MetricsApi.md#facilityAccessControlShow) | **GET** /facility/access-control | Show a facility access control
[**facilityApplyLicense**](docs/MetricsApi.md#facilityApplyLicense) | **POST** /facility/apply-license | Updates a facility license
[**facilityCardioMachineDelete**](docs/MetricsApi.md#facilityCardioMachineDelete) | **DELETE** /facility/cardio-machine/{id} | Delete a facility cardio machine
[**facilityCardioMachineShow**](docs/MetricsApi.md#facilityCardioMachineShow) | **POST** /facility/cardio-machine | Show a facility cardio machine
[**facilityCardioMachineUpdate**](docs/MetricsApi.md#facilityCardioMachineUpdate) | **PUT** /facility/cardio-machine/{id} | Update a facility cardio machine
[**facilityConfigurationShow**](docs/MetricsApi.md#facilityConfigurationShow) | **GET** /facility/configuration | Show a facility configuration
[**facilityConfigurationSubscribe**](docs/MetricsApi.md#facilityConfigurationSubscribe) | **GET** /facilityConfiguration/subscribe | Subscribe to facility configuration
[**facilityConfigurationUpdate**](docs/MetricsApi.md#facilityConfigurationUpdate) | **PUT** /facility/configuration | Update a facility configuration
[**facilityCreate**](docs/MetricsApi.md#facilityCreate) | **POST** /facility  | Create a facility
[**facilityInBodyIntegrationCreate**](docs/MetricsApi.md#facilityInBodyIntegrationCreate) | **POST** /facility/inbody-integration | Create a facility InBody integration
[**facilityInBodyIntegrationDelete**](docs/MetricsApi.md#facilityInBodyIntegrationDelete) | **DELETE** /facility/inbody-integration | Delete a facility InBody integration
[**facilityInBodyIntegrationShow**](docs/MetricsApi.md#facilityInBodyIntegrationShow) | **GET** /facility/inbody-integration | Show a facility InBody integration settings
[**facilityKioskSessionEndEchip**](docs/MetricsApi.md#facilityKioskSessionEndEchip) | **PUT** /facility/kiosk/session/end-echip/{echipId} | End a user session from a facility kiosk using an eChip Id
[**facilityKioskSessionUpdateEchip**](docs/MetricsApi.md#facilityKioskSessionUpdateEchip) | **PUT** /facility/kiosk/session/update-echip/{echipId} | Update a user session from a facility kiosk using an eChip Id
[**facilityKioskTokenCheck**](docs/MetricsApi.md#facilityKioskTokenCheck) | **GET** /facility/kiosk/token/check | Check validity of a kiosk token
[**facilityKioskTokenCreate**](docs/MetricsApi.md#facilityKioskTokenCreate) | **POST** /facility/kiosk/token | Create a kiosk token for a facility
[**facilityKioskTokenDelete**](docs/MetricsApi.md#facilityKioskTokenDelete) | **DELETE** /facility/kiosk/token | Delete a kiosk token for a facility
[**facilityKioskUserLogin**](docs/MetricsApi.md#facilityKioskUserLogin) | **POST** /facility/kiosk/user-login | Use a kiosk token to log in a facility user
[**facilityLicenseList**](docs/MetricsApi.md#facilityLicenseList) | **GET** /facility/license/list | List facility licenses
[**facilityLicenseShow**](docs/MetricsApi.md#facilityLicenseShow) | **GET** /facility/license | Show a facility license
[**facilityList**](docs/MetricsApi.md#facilityList) | **GET** /facility/list | List facilities
[**facilityProfileShow**](docs/MetricsApi.md#facilityProfileShow) | **GET** /facility/profile | Show facility profile
[**facilityProfileUpdate**](docs/MetricsApi.md#facilityProfileUpdate) | **PUT** /facility/profile | Update a facility profile
[**facilityRelationshipFacilityCreate**](docs/MetricsApi.md#facilityRelationshipFacilityCreate) | **POST** /facility/relationship | Create a user with a facility relationship
[**facilityRelationshipFacilityDelete**](docs/MetricsApi.md#facilityRelationshipFacilityDelete) | **DELETE** /facility/relationship/{id} | Delete a facility\&#39;s user relationship
[**facilityRelationshipFacilityList**](docs/MetricsApi.md#facilityRelationshipFacilityList) | **GET** /facility/relationship/list | List a facility\&#39;s user relationships
[**facilityRelationshipFacilityShow**](docs/MetricsApi.md#facilityRelationshipFacilityShow) | **GET** /facility/relationship | Show a facility\&#39;s user relationship
[**facilityRelationshipFacilitySubscribe**](docs/MetricsApi.md#facilityRelationshipFacilitySubscribe) | **GET** /facilityRelationship/facilitySubscribe | Subscribe to changes to facility relationship
[**facilityRelationshipFacilityUpdate**](docs/MetricsApi.md#facilityRelationshipFacilityUpdate) | **PUT** /facility/relationship/{id} | Update a facility\&#39;s user relationship
[**facilityRelationshipRequestFacilityCreate**](docs/MetricsApi.md#facilityRelationshipRequestFacilityCreate) | **POST** /facility/relationship-request | Create a facility relationship request (Facility to User)
[**facilityRelationshipRequestFacilityList**](docs/MetricsApi.md#facilityRelationshipRequestFacilityList) | **GET** /facility/relationship-request/list | List facility relationship requests (User to Facility)
[**facilityRelationshipRequestFacilityShow**](docs/MetricsApi.md#facilityRelationshipRequestFacilityShow) | **GET** /facility/relationship-request | Show a facility relationship request (User to Facility)
[**facilityRelationshipRequestFacilitySubscribe**](docs/MetricsApi.md#facilityRelationshipRequestFacilitySubscribe) | **GET** /facilityRelationshipRequest/facilitySubscribe | Subscribe to changes to facility relationship request
[**facilityRelationshipRequestFacilityUpdate**](docs/MetricsApi.md#facilityRelationshipRequestFacilityUpdate) | **PUT** /facility/relationship-request/{id} | Update a facility relationship request (User to Facility)
[**facilityRelationshipRequestUserCreate**](docs/MetricsApi.md#facilityRelationshipRequestUserCreate) | **POST** /user/facility/relationship-request | Create a facility relationship request (User to Facility)
[**facilityRelationshipRequestUserList**](docs/MetricsApi.md#facilityRelationshipRequestUserList) | **GET** /user/facility/relationship-request/list | List facility relationship requests (Facility to User)
[**facilityRelationshipRequestUserShow**](docs/MetricsApi.md#facilityRelationshipRequestUserShow) | **GET** /user/facility/relationship-request | Show a facility relationship request (Facility to User)
[**facilityRelationshipRequestUserSubscribe**](docs/MetricsApi.md#facilityRelationshipRequestUserSubscribe) | **GET** /facilityRelationshipRequest/userSubscribe | Subscribe to changes to facility relationship request
[**facilityRelationshipRequestUserUpdate**](docs/MetricsApi.md#facilityRelationshipRequestUserUpdate) | **PUT** /user/facility/relationship-request/{id} | Update a facility relationship request (Facility to User)
[**facilityRelationshipUserDelete**](docs/MetricsApi.md#facilityRelationshipUserDelete) | **DELETE** /user/facility/relationship/{id} | Delete a user\&#39;s facility relationship
[**facilityRelationshipUserList**](docs/MetricsApi.md#facilityRelationshipUserList) | **GET** /user/facility/relationship/list | List a user\&#39;s facility relationships
[**facilityRelationshipUserShow**](docs/MetricsApi.md#facilityRelationshipUserShow) | **GET** /user/facility/relationship | Show a user\&#39;s facility relationship
[**facilityRelationshipUserSubscribe**](docs/MetricsApi.md#facilityRelationshipUserSubscribe) | **GET** /facilityRelationship/userSubscribe | Subscribe to changes to facility relationship
[**facilityRelationshipUserUpdate**](docs/MetricsApi.md#facilityRelationshipUserUpdate) | **PUT** /user/facility/relationship/{id} | Update a user\&#39;s facility relationship
[**facilityReportCheckIn**](docs/MetricsApi.md#facilityReportCheckIn) | **GET** /facility/report/check-in | Counts the number of days a member recorded one strength machine data set.
[**facilitySessionCheckEchip**](docs/MetricsApi.md#facilitySessionCheckEchip) | **GET** /facility/session/check-echip | Check if eChip ID already assigned to active session
[**facilitySessionDelete**](docs/MetricsApi.md#facilitySessionDelete) | **DELETE** /facility/session/{id} | Delete a facility user\&#39;s session
[**facilitySessionEnd**](docs/MetricsApi.md#facilitySessionEnd) | **PUT** /facility/session/end | End a user session from a facility
[**facilitySessionList**](docs/MetricsApi.md#facilitySessionList) | **GET** /facility/session/list | List a facility\&#39;s user sessions
[**facilitySessionShow**](docs/MetricsApi.md#facilitySessionShow) | **GET** /facility/session | Show a facility user\&#39;s session
[**facilitySessionStart**](docs/MetricsApi.md#facilitySessionStart) | **POST** /facility/session/{userId} | Start a user session from a facility
[**facilitySessionStatus**](docs/MetricsApi.md#facilitySessionStatus) | **GET** /facility/session/{userId}/status | Retrieves a user\&#39;s session status for a facility
[**facilitySessionSubscribe**](docs/MetricsApi.md#facilitySessionSubscribe) | **GET** /facilitySession/subscribe | Subscribe to changes to a facilities\&#39;s session
[**facilitySessionUpdate**](docs/MetricsApi.md#facilitySessionUpdate) | **PUT** /facility/session/{echipId} | Update a user session from a facility using an eChip Id
[**facilityShow**](docs/MetricsApi.md#facilityShow) | **GET** /facility | Show a facility
[**facilityStrengthMachineConfigurationShow**](docs/MetricsApi.md#facilityStrengthMachineConfigurationShow) | **GET** /facility/strength-machine/configuration | Show a facility strength machine default configuration
[**facilityStrengthMachineConfigurationSubscribe**](docs/MetricsApi.md#facilityStrengthMachineConfigurationSubscribe) | **GET** /facilityStrengthMachineConfiguration/subscribe | Subscribe to changes to facility strength machine configuration
[**facilityStrengthMachineConfigurationUpdate**](docs/MetricsApi.md#facilityStrengthMachineConfigurationUpdate) | **PUT** /facility/strength-machine/configuration | Update a facility strength machine configuration
[**facilityStrengthMachineCreateEchip**](docs/MetricsApi.md#facilityStrengthMachineCreateEchip) | **POST** /facility/strength-machine/echip | Creates facility strength machines using eChip data
[**facilityStrengthMachineDelete**](docs/MetricsApi.md#facilityStrengthMachineDelete) | **DELETE** /facility/strength-machine/{id} | Delete a facility strength machine
[**facilityStrengthMachineInitializerOTP**](docs/MetricsApi.md#facilityStrengthMachineInitializerOTP) | **GET** /facility/strength-machine/initializer-otp | Show facility strength machine initializer token
[**facilityStrengthMachineInitializerToken**](docs/MetricsApi.md#facilityStrengthMachineInitializerToken) | **GET** /facility/strength-machine/initializer-token | Show facility strength machine initializer token
[**facilityStrengthMachineList**](docs/MetricsApi.md#facilityStrengthMachineList) | **GET** /facility/strength-machine/list | List facility strength machines
[**facilityStrengthMachineMaintenanceRecordCreate**](docs/MetricsApi.md#facilityStrengthMachineMaintenanceRecordCreate) | **POST** /facility/strength-machine/maintenance-record | Create a maintenance record for facility strength machine
[**facilityStrengthMachineMaintenanceRecordDelete**](docs/MetricsApi.md#facilityStrengthMachineMaintenanceRecordDelete) | **DELETE** /facility/strength-machine/maintenance-record/{id} | Delete a maintenance record for facility strength machine
[**facilityStrengthMachineMaintenanceRecordList**](docs/MetricsApi.md#facilityStrengthMachineMaintenanceRecordList) | **GET** /facility/strength-machine/maintenance-record/list | List maintenance records for facility strength machines
[**facilityStrengthMachineMaintenanceRecordShow**](docs/MetricsApi.md#facilityStrengthMachineMaintenanceRecordShow) | **GET** /facility/strength-machine/maintenance-record | Show a maintenance record by for facility strength machine
[**facilityStrengthMachineShow**](docs/MetricsApi.md#facilityStrengthMachineShow) | **GET** /facility/strength-machine | Show a facility strength machine
[**facilityStrengthMachineSubscribe**](docs/MetricsApi.md#facilityStrengthMachineSubscribe) | **GET** /facilityStrengthMachine/subscribe | Subscribe to changes to facility strength machine
[**facilityStrengthMachineUpdate**](docs/MetricsApi.md#facilityStrengthMachineUpdate) | **PUT** /facility/strength-machine/{id} | Update a facility strength machine
[**facilityStrengthMachineUtilizationInstanceList**](docs/MetricsApi.md#facilityStrengthMachineUtilizationInstanceList) | **GET** /facility/strength-machine/utilization-instance/list | List facility strength machine utilization instances
[**facilityStrengthMachineUtilizationInstanceShow**](docs/MetricsApi.md#facilityStrengthMachineUtilizationInstanceShow) | **GET** /facility/strength-machine/utilization-instance | Show facility strength machine utilization instance
[**facilitySubscribe**](docs/MetricsApi.md#facilitySubscribe) | **GET** /facility/subscribe | Subscribe to changes to a facility
[**heartRateDataSetCreate**](docs/MetricsApi.md#heartRateDataSetCreate) | **POST** /user/heart-rate-data-set | Create a user heart rate data set
[**heartRateDataSetDelete**](docs/MetricsApi.md#heartRateDataSetDelete) | **DELETE** /user/heart-rate-data-set/{id} | Delete a user\&#39;s heart rate data set
[**heartRateDataSetList**](docs/MetricsApi.md#heartRateDataSetList) | **GET** /user/heart-rate-data-set/list | List a user\&#39;s heart rate data sets
[**heartRateDataSetShow**](docs/MetricsApi.md#heartRateDataSetShow) | **GET** /user/heart-rate-data-set | Show a user\&#39;s heart rate data set
[**heartRateDataSetSubscribe**](docs/MetricsApi.md#heartRateDataSetSubscribe) | **GET** /heartRateDataSet/subscribe | Subscribe to heart rate data set changes
[**heartRateDataSetUpdate**](docs/MetricsApi.md#heartRateDataSetUpdate) | **PUT** /user/heart-rate-data-set/{id} | Update a user\&#39;s heart rate data set
[**heightMeasurementCreate**](docs/MetricsApi.md#heightMeasurementCreate) | **POST** /user/height-measurement | Create a user height measurement
[**heightMeasurementDelete**](docs/MetricsApi.md#heightMeasurementDelete) | **DELETE** /user/height-measurement/{id} | Delete a user\&#39;s height measurement
[**heightMeasurementList**](docs/MetricsApi.md#heightMeasurementList) | **GET** /user/height-measurement/list | List a user\&#39;s height measurements
[**heightMeasurementShow**](docs/MetricsApi.md#heightMeasurementShow) | **GET** /user/height-measurement | Show a user\&#39;s height measurement
[**heightMeasurementSubscribe**](docs/MetricsApi.md#heightMeasurementSubscribe) | **GET** /heightMeasurement/subscribe | Subscribe to changes to user\&#39;s height measurements
[**mSeriesAppSessionCreate**](docs/MetricsApi.md#mSeriesAppSessionCreate) | **POST** /m-series/app-session | Create a user session using M Series app data
[**mSeriesAppSessionDelete**](docs/MetricsApi.md#mSeriesAppSessionDelete) | **DELETE** /m-series/app-session/{id} | Delete a user\&#39;s session
[**mSeriesAppSessionExport**](docs/MetricsApi.md#mSeriesAppSessionExport) | **GET** /m-series/app-session/export/{id}/{format} | Export a user\&#39;s session as a file
[**mSeriesAppSessionExportFlat**](docs/MetricsApi.md#mSeriesAppSessionExportFlat) | **GET** /m-series/app-session/export/{filename} | Export a user\&#39;s session as a flat file
[**mSeriesAppSessionList**](docs/MetricsApi.md#mSeriesAppSessionList) | **GET** /m-series/app-session/list | List a user\&#39;s sessions generated using M Series app data
[**mSeriesAppSessionShow**](docs/MetricsApi.md#mSeriesAppSessionShow) | **GET** /m-series/app-session | Show a user\&#39;s session generated using M Series app data
[**mSeriesChallengeCreate**](docs/MetricsApi.md#mSeriesChallengeCreate) | **POST** /m-series/challenge | Create a user mSeries Challenge
[**mSeriesChallengeDelete**](docs/MetricsApi.md#mSeriesChallengeDelete) | **DELETE** /m-series/challenge/{id} | Delete a user\&#39;s owned mSeries Challenge
[**mSeriesChallengeList**](docs/MetricsApi.md#mSeriesChallengeList) | **GET** /m-series/challenge/list | List a user\&#39;s owned or joined mSeries Challenges
[**mSeriesChallengeParticipantCreate**](docs/MetricsApi.md#mSeriesChallengeParticipantCreate) | **POST** /m-series/challenge/participant | Join Challenge
[**mSeriesChallengeParticipantDelete**](docs/MetricsApi.md#mSeriesChallengeParticipantDelete) | **DELETE** /m-series/challenge/{mSeriesChallengeId}/participant | Leave Challenge
[**mSeriesChallengeParticipantList**](docs/MetricsApi.md#mSeriesChallengeParticipantList) | **GET** /m-series/challenge/participant/list | Search for mSeries Challenge Participants
[**mSeriesChallengeParticipantShow**](docs/MetricsApi.md#mSeriesChallengeParticipantShow) | **GET** /m-series/challenge/participant | Show a user\&#39;s mSeries User Challenge Participant Record
[**mSeriesChallengeShow**](docs/MetricsApi.md#mSeriesChallengeShow) | **GET** /m-series/challenge | Show a user mSeries Challenge
[**mSeriesChallengeUpdate**](docs/MetricsApi.md#mSeriesChallengeUpdate) | **PUT** /m-series/challenge/{id} | Update a user mSeries Challenge
[**mSeriesDataSetCreate**](docs/MetricsApi.md#mSeriesDataSetCreate) | **POST** /m-series/data-set | Create a user M Series data set
[**mSeriesDataSetDelete**](docs/MetricsApi.md#mSeriesDataSetDelete) | **DELETE** /m-series/data-set/{id} | Delete a user\&#39;s M Series data set
[**mSeriesDataSetList**](docs/MetricsApi.md#mSeriesDataSetList) | **GET** /m-series/data-set/list | List a user\&#39;s M Series data sets
[**mSeriesDataSetReenqueue**](docs/MetricsApi.md#mSeriesDataSetReenqueue) | **POST** /m-series/data-set/reenqueue | Reenqueue a user\&#39;s M Series data set
[**mSeriesDataSetSegmentShow**](docs/MetricsApi.md#mSeriesDataSetSegmentShow) | **GET** /m-series/data-set/segment | Show a user\&#39;s M Series data set segment
[**mSeriesDataSetShow**](docs/MetricsApi.md#mSeriesDataSetShow) | **GET** /m-series/data-set | Show a user\&#39;s M Series data set
[**mSeriesDataSetSubscribe**](docs/MetricsApi.md#mSeriesDataSetSubscribe) | **GET** /mSeriesDataset/subscribe | Subscribe to M Series data set changes
[**mSeriesDataSetUpdate**](docs/MetricsApi.md#mSeriesDataSetUpdate) | **PUT** /m-series/data-set/{id} | Update a user\&#39;s M Series data set
[**mSeriesFtpMeasurementCreate**](docs/MetricsApi.md#mSeriesFtpMeasurementCreate) | **POST** /m-series/ftp-measurement | Create a user M Series FTP measurement
[**mSeriesFtpMeasurementDelete**](docs/MetricsApi.md#mSeriesFtpMeasurementDelete) | **DELETE** /m-series/ftp-measurement/{id} | Delete a user\&#39;s M Series FTP measurement
[**mSeriesFtpMeasurementList**](docs/MetricsApi.md#mSeriesFtpMeasurementList) | **GET** /m-series/ftp-measurement/list | List a user\&#39;s M Series FTP measurements
[**mSeriesFtpMeasurementShow**](docs/MetricsApi.md#mSeriesFtpMeasurementShow) | **GET** /m-series/ftp-measurement | Show a user\&#39;s M Series FTP measurement
[**mSeriesProfileStatsShow**](docs/MetricsApi.md#mSeriesProfileStatsShow) | **GET** /m-series/profile-stats | Show a user\&#39;s M Series data set
[**machineAdjustmentCreate**](docs/MetricsApi.md#machineAdjustmentCreate) | **POST** /user/machine-adjustment | Create a user machine adjustment
[**machineAdjustmentDelete**](docs/MetricsApi.md#machineAdjustmentDelete) | **DELETE** /user/machine-adjustment/{id} | Delete a users machine adjustment
[**machineAdjustmentList**](docs/MetricsApi.md#machineAdjustmentList) | **GET** /user/machine-adjustment/list | List user machine adjustments
[**machineAdjustmentShow**](docs/MetricsApi.md#machineAdjustmentShow) | **GET** /user/machine-adjustment | Shows a users machine adjustments
[**machineAdjustmentUpdate**](docs/MetricsApi.md#machineAdjustmentUpdate) | **PUT** /user/machine-adjustment/{id} | Update a users machine adjustments
[**oauthAuthorize**](docs/MetricsApi.md#oauthAuthorize) | **POST** /oauth/authorize | Authorizes a third party application
[**oauthDeauthorize**](docs/MetricsApi.md#oauthDeauthorize) | **DELETE** /oauth/deauthorize | Deauthorizes an oauth user
[**oauthInitiate**](docs/MetricsApi.md#oauthInitiate) | **POST** /oauth/initiate/{service} | Initiates OAuth access request and return parameters
[**oauthServiceDelete**](docs/MetricsApi.md#oauthServiceDelete) | **DELETE** /oauth/service/{id} | Delete a user\&#39;s oauth service connection
[**oauthServiceList**](docs/MetricsApi.md#oauthServiceList) | **GET** /oauth/service/list | List a user\&#39;s oauth service connections
[**oauthServiceShow**](docs/MetricsApi.md#oauthServiceShow) | **GET** /oauth/service | Show a user\&#39;s oauth service connection
[**oauthToken**](docs/MetricsApi.md#oauthToken) | **GET** /oauth/token | Returns tokens for third party oauth
[**primaryEmailAddressShow**](docs/MetricsApi.md#primaryEmailAddressShow) | **GET** /user/primary-email-address | Show a user\&#39;s primary email address id
[**primaryEmailAddressUpdate**](docs/MetricsApi.md#primaryEmailAddressUpdate) | **PUT** /user/primary-email-address/{emailAddressId} | Update a user\&#39;s primary email address id
[**profileShow**](docs/MetricsApi.md#profileShow) | **GET** /user/profile | Show a user profile
[**profileSubscribe**](docs/MetricsApi.md#profileSubscribe) | **GET** /profile/subscribe | Subscribe to changes on a user profile
[**profileUpdate**](docs/MetricsApi.md#profileUpdate) | **PUT** /user/profile | Update a user profile
[**sessionDelete**](docs/MetricsApi.md#sessionDelete) | **DELETE** /session/{id} | Delete a user\&#39;s session
[**sessionEnd**](docs/MetricsApi.md#sessionEnd) | **PUT** /session/{id}/end | End a user session
[**sessionList**](docs/MetricsApi.md#sessionList) | **GET** /session/list | List a user\&#39;s sessions
[**sessionPlanAttachSequence**](docs/MetricsApi.md#sessionPlanAttachSequence) | **POST** /session-plan/{id}/sequence/{sequenceId} | Attach a sequence to an session plan
[**sessionPlanAttachSequenceTemplate**](docs/MetricsApi.md#sessionPlanAttachSequenceTemplate) | **POST** /session-plan/{id}/sequence-template/{sequenceTemplateId} | Attach a sequence template to an session plan
[**sessionPlanCloneTemplate**](docs/MetricsApi.md#sessionPlanCloneTemplate) | **POST** /session-plan/clone-template/{templateId} | Clone session plan from session plan template
[**sessionPlanCreate**](docs/MetricsApi.md#sessionPlanCreate) | **POST** /session-plan | Create session plan
[**sessionPlanDelete**](docs/MetricsApi.md#sessionPlanDelete) | **DELETE** /session-plan/{id} | Delete session plan
[**sessionPlanDetachSequence**](docs/MetricsApi.md#sessionPlanDetachSequence) | **DELETE** /session-plan/{id}/sequence/{sequenceId} | Detach a sequence to an session plan
[**sessionPlanList**](docs/MetricsApi.md#sessionPlanList) | **GET** /session-plan/list | List session plan
[**sessionPlanSequenceCreate**](docs/MetricsApi.md#sessionPlanSequenceCreate) | **POST** /session-plan-sequence | Create session plan sequence
[**sessionPlanSequenceDelete**](docs/MetricsApi.md#sessionPlanSequenceDelete) | **DELETE** /session-plan-sequence/{id} | Delete session plan sequence
[**sessionPlanSequenceInstanceDelete**](docs/MetricsApi.md#sessionPlanSequenceInstanceDelete) | **DELETE** /session-plan-sequence-instance/{id} | Delete session plan sequence instance
[**sessionPlanSequenceInstanceList**](docs/MetricsApi.md#sessionPlanSequenceInstanceList) | **GET** /session-plan-sequence-instance/list | List session plan sequence instance
[**sessionPlanSequenceInstanceShow**](docs/MetricsApi.md#sessionPlanSequenceInstanceShow) | **GET** /session-plan-sequence-instance | Show a session plan sequence instance
[**sessionPlanSequenceList**](docs/MetricsApi.md#sessionPlanSequenceList) | **GET** /session-plan-sequence/list | List session plan sequence
[**sessionPlanSequenceShow**](docs/MetricsApi.md#sessionPlanSequenceShow) | **GET** /session-plan-sequence | Show a session plan sequence
[**sessionPlanSequenceTemplateCreate**](docs/MetricsApi.md#sessionPlanSequenceTemplateCreate) | **POST** /session-plan-sequence-template | Create session plan sequence template
[**sessionPlanSequenceTemplateDelete**](docs/MetricsApi.md#sessionPlanSequenceTemplateDelete) | **DELETE** /session-plan-sequence-template/{id} | Delete session plan sequence template
[**sessionPlanSequenceTemplateList**](docs/MetricsApi.md#sessionPlanSequenceTemplateList) | **GET** /session-plan-sequence-template/list | List session plan sequence template
[**sessionPlanSequenceTemplateShow**](docs/MetricsApi.md#sessionPlanSequenceTemplateShow) | **GET** /session-plan-sequence-template | Show a session plan sequence template
[**sessionPlanSequenceTemplateUpdate**](docs/MetricsApi.md#sessionPlanSequenceTemplateUpdate) | **PUT** /session-plan-sequence-template/{id} | Update session plan sequence template
[**sessionPlanSequenceUpdate**](docs/MetricsApi.md#sessionPlanSequenceUpdate) | **PUT** /session-plan-sequence/{id} | Update session plan sequence
[**sessionPlanSetCreateActivity**](docs/MetricsApi.md#sessionPlanSetCreateActivity) | **POST** /session-plan-set/{sequenceId}/activity-set | Create session plan activity set
[**sessionPlanSetCreateCardio**](docs/MetricsApi.md#sessionPlanSetCreateCardio) | **POST** /session-plan-set/{sequenceId}/cardio-set | Create session plan cardio set
[**sessionPlanSetCreateStrength**](docs/MetricsApi.md#sessionPlanSetCreateStrength) | **POST** /session-plan-set/{sequenceId}/strength-set | Create session plan strength set
[**sessionPlanSetCreateStretch**](docs/MetricsApi.md#sessionPlanSetCreateStretch) | **POST** /session-plan-set/{sequenceId}/stretch-set | Create session plan stretch set
[**sessionPlanSetDelete**](docs/MetricsApi.md#sessionPlanSetDelete) | **DELETE** /session-plan-set/{id} | Delete session plan set
[**sessionPlanSetInstanceShow**](docs/MetricsApi.md#sessionPlanSetInstanceShow) | **GET** /session-plan-set-instance | Show a session plan set intance
[**sessionPlanSetInstanceUpdateActivity**](docs/MetricsApi.md#sessionPlanSetInstanceUpdateActivity) | **PUT** /session-plan-set-instance/{id}/activity-set | Update session plan activity set instance
[**sessionPlanSetInstanceUpdateCardio**](docs/MetricsApi.md#sessionPlanSetInstanceUpdateCardio) | **PUT** /session-plan-set-instance/{id}/cardio-set | Update session plan cardio set instance
[**sessionPlanSetInstanceUpdateStrength**](docs/MetricsApi.md#sessionPlanSetInstanceUpdateStrength) | **PUT** /session-plan-set-instance/{id}/strength-set | Update session plan strength set instance
[**sessionPlanSetInstanceUpdateStretch**](docs/MetricsApi.md#sessionPlanSetInstanceUpdateStretch) | **PUT** /session-plan-set-instance/{id}/stretch-set | Update session plan stretch set instance
[**sessionPlanSetList**](docs/MetricsApi.md#sessionPlanSetList) | **GET** /session-plan-set/list | List session plan sets
[**sessionPlanSetShow**](docs/MetricsApi.md#sessionPlanSetShow) | **GET** /session-plan-set | Show a session plan set
[**sessionPlanSetTemplateCreateActivity**](docs/MetricsApi.md#sessionPlanSetTemplateCreateActivity) | **POST** /session-plan-set-template/{sequenceId}/activity-set | Create session plan activity set template
[**sessionPlanSetTemplateCreateCardio**](docs/MetricsApi.md#sessionPlanSetTemplateCreateCardio) | **POST** /session-plan-set-template/{sequenceId}/cardio-set | Create session plan cardio set template
[**sessionPlanSetTemplateCreateStrength**](docs/MetricsApi.md#sessionPlanSetTemplateCreateStrength) | **POST** /session-plan-set-template/{sequenceId}/strength-set | Create session plan strength set template
[**sessionPlanSetTemplateCreateStretch**](docs/MetricsApi.md#sessionPlanSetTemplateCreateStretch) | **POST** /session-plan-set-template/{sequenceId}/stretch-set | Create session plan stretch set template
[**sessionPlanSetTemplateDelete**](docs/MetricsApi.md#sessionPlanSetTemplateDelete) | **DELETE** /session-plan-set-template/{id} | Delete session plan set template
[**sessionPlanSetTemplateList**](docs/MetricsApi.md#sessionPlanSetTemplateList) | **GET** /session-plan-set-template/list | List session plan set templates
[**sessionPlanSetTemplateShow**](docs/MetricsApi.md#sessionPlanSetTemplateShow) | **GET** /session-plan-set-template | Show a session plan set template
[**sessionPlanSetTemplateUpdateActivity**](docs/MetricsApi.md#sessionPlanSetTemplateUpdateActivity) | **PUT** /session-plan-set-template/activity-set/{id} | Update session plan activity set template
[**sessionPlanSetTemplateUpdateCardio**](docs/MetricsApi.md#sessionPlanSetTemplateUpdateCardio) | **PUT** /session-plan-set-template/cardio-set/{id} | Update session plan cardio set template
[**sessionPlanSetTemplateUpdateStrength**](docs/MetricsApi.md#sessionPlanSetTemplateUpdateStrength) | **PUT** /session-plan-set-template/strength-set/{id} | Update session plan strength set template
[**sessionPlanSetTemplateUpdateStretch**](docs/MetricsApi.md#sessionPlanSetTemplateUpdateStretch) | **PUT** /session-plan-set-template/stretch-set/{id} | Update session plan stretch set template
[**sessionPlanSetUpdateActivity**](docs/MetricsApi.md#sessionPlanSetUpdateActivity) | **PUT** /session-plan-set/{id}/activity-set | Update session plan activity set
[**sessionPlanSetUpdateCardio**](docs/MetricsApi.md#sessionPlanSetUpdateCardio) | **PUT** /session-plan-set/{id}/cardio-set | Update session plan cardio set
[**sessionPlanSetUpdateStrength**](docs/MetricsApi.md#sessionPlanSetUpdateStrength) | **PUT** /session-plan-set/{id}/strength-set | Update session plan strength set
[**sessionPlanSetUpdateStretch**](docs/MetricsApi.md#sessionPlanSetUpdateStretch) | **PUT** /session-plan-set/{id}/stretch-set | Update session plan stretch set
[**sessionPlanShow**](docs/MetricsApi.md#sessionPlanShow) | **GET** /session-plan | Show a session plan
[**sessionPlanTemplateAttachSequence**](docs/MetricsApi.md#sessionPlanTemplateAttachSequence) | **POST** /session-plan-template/{id}/sequence/{sequenceId} | Attach a sequence to an session plan template
[**sessionPlanTemplateCreate**](docs/MetricsApi.md#sessionPlanTemplateCreate) | **POST** /session-plan-template | Create session plan template
[**sessionPlanTemplateDelete**](docs/MetricsApi.md#sessionPlanTemplateDelete) | **DELETE** /session-plan-template/{id} | Delete session plan template
[**sessionPlanTemplateDetachSequence**](docs/MetricsApi.md#sessionPlanTemplateDetachSequence) | **PUT** /session-plan-template/{id}/sequence/{sequenceId} | Detach a sequence to an session plan template
[**sessionPlanTemplateList**](docs/MetricsApi.md#sessionPlanTemplateList) | **GET** /session-plan-template/list | List session plan templates
[**sessionPlanTemplateShow**](docs/MetricsApi.md#sessionPlanTemplateShow) | **GET** /session-plan-template | Show a session plan template
[**sessionPlanTemplateUpdate**](docs/MetricsApi.md#sessionPlanTemplateUpdate) | **PUT** /session-plan-template/{id} | Update session plan template
[**sessionPlanUpdate**](docs/MetricsApi.md#sessionPlanUpdate) | **PUT** /session-plan/{id} | Update session plan
[**sessionShow**](docs/MetricsApi.md#sessionShow) | **GET** /session | Show a user\&#39;s session
[**sessionStart**](docs/MetricsApi.md#sessionStart) | **POST** /session | Start a user session
[**sessionSubscribe**](docs/MetricsApi.md#sessionSubscribe) | **GET** /session:subscribe | Subscribe to changes to a user\&#39;s session
[**strengthExerciseCreate**](docs/MetricsApi.md#strengthExerciseCreate) | **POST** /strength-exercise | Create a strength exercise
[**strengthExerciseDelete**](docs/MetricsApi.md#strengthExerciseDelete) | **DELETE** /strength-exercise/{id} | Delete a strength exercise
[**strengthExerciseList**](docs/MetricsApi.md#strengthExerciseList) | **GET** /strength-exercise/list | List strength exercises
[**strengthExerciseMuscleCreate**](docs/MetricsApi.md#strengthExerciseMuscleCreate) | **POST** /strength-exercise/{strengthExerciseId}/muscle | Create a strength exercise muscle
[**strengthExerciseMuscleDelete**](docs/MetricsApi.md#strengthExerciseMuscleDelete) | **DELETE** /strength-exercise/muscle/{id} | Delete a strength exercise muscle
[**strengthExerciseMuscleList**](docs/MetricsApi.md#strengthExerciseMuscleList) | **GET** /strength-exercise/{strengthExerciseId}/muscle/list | List strength exercise muscles
[**strengthExerciseMuscleShow**](docs/MetricsApi.md#strengthExerciseMuscleShow) | **GET** /strength-exercise/muscle | Show a strength exercise muscle
[**strengthExerciseMuscleUpdate**](docs/MetricsApi.md#strengthExerciseMuscleUpdate) | **PUT** /strength-exercise/muscle/{id} | Update a strength exercise muscle
[**strengthExerciseShow**](docs/MetricsApi.md#strengthExerciseShow) | **GET** /strength-exercise | Show a strength exercise
[**strengthExerciseUpdate**](docs/MetricsApi.md#strengthExerciseUpdate) | **PUT** /strength-exercise/{id} | Update a strength exercise
[**strengthExerciseVariantCreate**](docs/MetricsApi.md#strengthExerciseVariantCreate) | **POST** /strength-exercise/{strengthExerciseId}/variant | Create a strength exercise variant
[**strengthExerciseVariantDelete**](docs/MetricsApi.md#strengthExerciseVariantDelete) | **DELETE** /strength-exercise/variant/{id} | Delete a strength exercise variant
[**strengthExerciseVariantList**](docs/MetricsApi.md#strengthExerciseVariantList) | **GET** /strength-exercise/variant/list | List strength exercise variants
[**strengthExerciseVariantShow**](docs/MetricsApi.md#strengthExerciseVariantShow) | **GET** /strength-exercise/variant | Show a strength exercise variant
[**strengthExerciseVariantUpdate**](docs/MetricsApi.md#strengthExerciseVariantUpdate) | **PUT** /strength-exercise/variant/{id} | Update a strength exercise variant
[**strengthMachineDataSetCreate**](docs/MetricsApi.md#strengthMachineDataSetCreate) | **POST** /strength-machine-data-set | Create a strength machine data set
[**strengthMachineDataSetCreateA500**](docs/MetricsApi.md#strengthMachineDataSetCreateA500) | **POST** /strength-machine-data-set/a500 | Create a strength machine data set from an A500 machine
[**strengthMachineDataSetDelete**](docs/MetricsApi.md#strengthMachineDataSetDelete) | **DELETE** /strength-machine-data-set/{id} | Delete a strength machine data set
[**strengthMachineDataSetExport**](docs/MetricsApi.md#strengthMachineDataSetExport) | **GET** /strength-machine-data-set/{id}/export/{format} | Export an A500 strength machine data set
[**strengthMachineDataSetExportFlat**](docs/MetricsApi.md#strengthMachineDataSetExportFlat) | **GET** /user/{userId}/strength-machine-data-set/export/{filename} | Export an A500 strength machine data set as a flat file
[**strengthMachineDataSetList**](docs/MetricsApi.md#strengthMachineDataSetList) | **GET** /strength-machine-data-set/list | List strength machine data sets
[**strengthMachineDataSetShow**](docs/MetricsApi.md#strengthMachineDataSetShow) | **GET** /strength-machine-data-set | Show a strength machine data set
[**strengthMachineDataSetSubscribe**](docs/MetricsApi.md#strengthMachineDataSetSubscribe) | **GET** /strengthMachineDataSet/subscribe | Subscribe to strength machine data set changes
[**strengthMachineDataSetUpdate**](docs/MetricsApi.md#strengthMachineDataSetUpdate) | **PUT** /strength-machine-data-set/{id}/{sessionId} | Update a strength machine data set
[**strengthMachineHistoryList**](docs/MetricsApi.md#strengthMachineHistoryList) | **GET** /strength-machine-history | List strength machines used by user
[**strengthMachineList**](docs/MetricsApi.md#strengthMachineList) | **GET** /strength-machine/list | List strength machines
[**strengthMachineProfileStatsShow**](docs/MetricsApi.md#strengthMachineProfileStatsShow) | **GET** /strength-machine/{strengthMachineId}/profile-stats | Show a user\&#39;s strength machine profile stats
[**strengthMachineShow**](docs/MetricsApi.md#strengthMachineShow) | **GET** /strength-machine | Show a strength machine
[**stretchExerciseCreate**](docs/MetricsApi.md#stretchExerciseCreate) | **POST** /stretch-exercise | Create a stretch exercise
[**stretchExerciseDelete**](docs/MetricsApi.md#stretchExerciseDelete) | **DELETE** /stretch-exercise/{id} | Delete a stretch exercise
[**stretchExerciseList**](docs/MetricsApi.md#stretchExerciseList) | **GET** /stretch-exercise/list | List stretch exercises
[**stretchExerciseMuscleCreate**](docs/MetricsApi.md#stretchExerciseMuscleCreate) | **POST** /stretch-exercise/{stretchExerciseId}/muscle | Create a stretch exercise muscle
[**stretchExerciseMuscleDelete**](docs/MetricsApi.md#stretchExerciseMuscleDelete) | **DELETE** /stretch-exercise/muscle/{id} | Delete a stretch exercise muscle
[**stretchExerciseMuscleList**](docs/MetricsApi.md#stretchExerciseMuscleList) | **GET** /stretch-exercise/{stretchExerciseId}/muscle/list | List stretch exercise muscles
[**stretchExerciseMuscleShow**](docs/MetricsApi.md#stretchExerciseMuscleShow) | **GET** /stretch-exercise/muscle | Show a stretch exercise muscle
[**stretchExerciseMuscleUpdate**](docs/MetricsApi.md#stretchExerciseMuscleUpdate) | **PUT** /stretch-exercise/muscle/{id} | Update a stretch exercise muscle
[**stretchExerciseShow**](docs/MetricsApi.md#stretchExerciseShow) | **GET** /stretch-exercise | Show a stretch exercise
[**stretchExerciseUpdate**](docs/MetricsApi.md#stretchExerciseUpdate) | **PUT** /stretch-exercise/{id} | Update a stretch exercise
[**stretchExerciseVariantCreate**](docs/MetricsApi.md#stretchExerciseVariantCreate) | **POST** /stretch-exercise/{stretchExerciseId}/variant | Create a stretch exercise variant
[**stretchExerciseVariantDelete**](docs/MetricsApi.md#stretchExerciseVariantDelete) | **DELETE** /stretch-exercise/variant/{id} | Delete a stretch exercise variant
[**stretchExerciseVariantList**](docs/MetricsApi.md#stretchExerciseVariantList) | **GET** /stretch-exercise/variant/list | List stretch exercise variants
[**stretchExerciseVariantShow**](docs/MetricsApi.md#stretchExerciseVariantShow) | **GET** /stretch-exercise/variant | Show a stretch exercise variant
[**stretchExerciseVariantUpdate**](docs/MetricsApi.md#stretchExerciseVariantUpdate) | **PUT** /stretch-exercise/variant/{id} | Update a stretch exercise variant
[**userApplicationAuthorizationDeveloperDelete**](docs/MetricsApi.md#userApplicationAuthorizationDeveloperDelete) | **DELETE** /development-account/{developmentAccountId}/user-application-authorization/{id} | Deletes a user application authorization as a developer
[**userApplicationAuthorizationDeveloperList**](docs/MetricsApi.md#userApplicationAuthorizationDeveloperList) | **GET** /development-account/{developmentAccountId}/user-application-authorization/list | Lists user application authorizations as a developer
[**userApplicationAuthorizationDeveloperShow**](docs/MetricsApi.md#userApplicationAuthorizationDeveloperShow) | **GET** /development-account/{developmentAccountId}/user-application-authorization/ | Shows a user application authorization as a developer
[**userApplicationAuthorizationUserDelete**](docs/MetricsApi.md#userApplicationAuthorizationUserDelete) | **DELETE** /user/application-authorization/{id} | Deletes a user application authorization
[**userApplicationAuthorizationUserList**](docs/MetricsApi.md#userApplicationAuthorizationUserList) | **GET** /user/application-authorization/list | Lists user application authorizations
[**userApplicationAuthorizationUserShow**](docs/MetricsApi.md#userApplicationAuthorizationUserShow) | **GET** /user/application-authorization | Shows a user application authorization
[**userCreate**](docs/MetricsApi.md#userCreate) | **POST** /user | Create a user with basic authentication
[**userCreateBasic**](docs/MetricsApi.md#userCreateBasic) | **POST** /user/create-basic | Create a user with basic authentication [DEP]
[**userDelete**](docs/MetricsApi.md#userDelete) | **DELETE** /user | Delete a user
[**userInBodyIntegrationCreate**](docs/MetricsApi.md#userInBodyIntegrationCreate) | **POST** /user/{userId}/inbody-integration | Create a user InBody integration
[**userInBodyIntegrationDelete**](docs/MetricsApi.md#userInBodyIntegrationDelete) | **DELETE** /user/{userId}/inbody-integration | Delete a user InBody integration
[**userInBodyIntegrationShow**](docs/MetricsApi.md#userInBodyIntegrationShow) | **GET** /user/{userId}/inbody-integration | Show a user InBody integration settings
[**userInBodyIntegrationSync**](docs/MetricsApi.md#userInBodyIntegrationSync) | **GET** /user/{userId}/inbody-integration/sync | Request a sync of user InBody data
[**userShow**](docs/MetricsApi.md#userShow) | **GET** /user | Show a user
[**userSubscribe**](docs/MetricsApi.md#userSubscribe) | **GET** /user/subscribe | Subscribe to changes to a user
[**weightMeasurementCreate**](docs/MetricsApi.md#weightMeasurementCreate) | **POST** /user/weight-measurement | Create a user weight measurement
[**weightMeasurementDelete**](docs/MetricsApi.md#weightMeasurementDelete) | **DELETE** /user/weight-measurement/{id} | Delete a user\&#39;s weight measurement
[**weightMeasurementImportInBody**](docs/MetricsApi.md#weightMeasurementImportInBody) | **POST** /user/{userId}/weight-measurement/import-inbody | Creates body composition record from InBody machine
[**weightMeasurementImportInBodyCSV**](docs/MetricsApi.md#weightMeasurementImportInBodyCSV) | **POST** /user/weight-measurement/import-inbody-csv | Creates body composition record from csv and converts to json
[**weightMeasurementList**](docs/MetricsApi.md#weightMeasurementList) | **GET** /user/weight-measurement/list | List a user\&#39;s weight measurements
[**weightMeasurementShow**](docs/MetricsApi.md#weightMeasurementShow) | **GET** /user/weight-measurement | Show a user\&#39;s weight measurement
[**weightMeasurementSubscribe**](docs/MetricsApi.md#weightMeasurementSubscribe) | **GET** /weightMeasurement/subscribe | Subscribe to changes to user\&#39;s weight measurements


## Documentation for Models

 - [A500DataSetData](docs/A500DataSetData.md)
 - [A500GetUserData](docs/A500GetUserData.md)
 - [A500GetUserResponse](docs/A500GetUserResponse.md)
 - [A500MachineStateData](docs/A500MachineStateData.md)
 - [A500MachineStateResponse](docs/A500MachineStateResponse.md)
 - [A500RepDataPointData](docs/A500RepDataPointData.md)
 - [A500TestResultData](docs/A500TestResultData.md)
 - [A500TimeSeriesPointData](docs/A500TimeSeriesPointData.md)
 - [AcceptedTermsVersionData](docs/AcceptedTermsVersionData.md)
 - [ApplicationData](docs/ApplicationData.md)
 - [ApplicationListResponse](docs/ApplicationListResponse.md)
 - [ApplicationListResponseMeta](docs/ApplicationListResponseMeta.md)
 - [ApplicationResponse](docs/ApplicationResponse.md)
 - [ApplicationSorting](docs/ApplicationSorting.md)
 - [BodyCompositionMeasurementData](docs/BodyCompositionMeasurementData.md)
 - [CardioExerciseData](docs/CardioExerciseData.md)
 - [CardioExerciseListResponse](docs/CardioExerciseListResponse.md)
 - [CardioExerciseListResponseMeta](docs/CardioExerciseListResponseMeta.md)
 - [CardioExerciseMuscleListResponse](docs/CardioExerciseMuscleListResponse.md)
 - [CardioExerciseMuscleListResponseMeta](docs/CardioExerciseMuscleListResponseMeta.md)
 - [CardioExerciseMuscleResponse](docs/CardioExerciseMuscleResponse.md)
 - [CardioExerciseResponse](docs/CardioExerciseResponse.md)
 - [CardioExerciseSorting](docs/CardioExerciseSorting.md)
 - [CardioExerciseVariantData](docs/CardioExerciseVariantData.md)
 - [CardioExerciseVariantListResponse](docs/CardioExerciseVariantListResponse.md)
 - [CardioExerciseVariantListResponseMeta](docs/CardioExerciseVariantListResponseMeta.md)
 - [CardioExerciseVariantResponse](docs/CardioExerciseVariantResponse.md)
 - [CardioExerciseVariantSorting](docs/CardioExerciseVariantSorting.md)
 - [CardioMachineData](docs/CardioMachineData.md)
 - [CardioMachineListResponse](docs/CardioMachineListResponse.md)
 - [CardioMachineListResponseMeta](docs/CardioMachineListResponseMeta.md)
 - [CardioMachineResponse](docs/CardioMachineResponse.md)
 - [CardioMachineSorting](docs/CardioMachineSorting.md)
 - [DevelopmentAccountData](docs/DevelopmentAccountData.md)
 - [DevelopmentAccountListResponse](docs/DevelopmentAccountListResponse.md)
 - [DevelopmentAccountListResponseMeta](docs/DevelopmentAccountListResponseMeta.md)
 - [DevelopmentAccountRelationshipData](docs/DevelopmentAccountRelationshipData.md)
 - [DevelopmentAccountRelationshipListResponse](docs/DevelopmentAccountRelationshipListResponse.md)
 - [DevelopmentAccountRelationshipListResponseMeta](docs/DevelopmentAccountRelationshipListResponseMeta.md)
 - [DevelopmentAccountRelationshipRequestData](docs/DevelopmentAccountRelationshipRequestData.md)
 - [DevelopmentAccountRelationshipRequestListResponse](docs/DevelopmentAccountRelationshipRequestListResponse.md)
 - [DevelopmentAccountRelationshipRequestListResponseMeta](docs/DevelopmentAccountRelationshipRequestListResponseMeta.md)
 - [DevelopmentAccountRelationshipRequestResponse](docs/DevelopmentAccountRelationshipRequestResponse.md)
 - [DevelopmentAccountRelationshipRequestSorting](docs/DevelopmentAccountRelationshipRequestSorting.md)
 - [DevelopmentAccountRelationshipResponse](docs/DevelopmentAccountRelationshipResponse.md)
 - [DevelopmentAccountRelationshipSorting](docs/DevelopmentAccountRelationshipSorting.md)
 - [DevelopmentAccountResponse](docs/DevelopmentAccountResponse.md)
 - [DevelopmentAccountSorting](docs/DevelopmentAccountSorting.md)
 - [EmailAddressData](docs/EmailAddressData.md)
 - [EmailAddressListResponse](docs/EmailAddressListResponse.md)
 - [EmailAddressListResponseMeta](docs/EmailAddressListResponseMeta.md)
 - [EmailAddressResponse](docs/EmailAddressResponse.md)
 - [EmailAddressSorting](docs/EmailAddressSorting.md)
 - [EndpointsData](docs/EndpointsData.md)
 - [EndpointsResponse](docs/EndpointsResponse.md)
 - [ErrorData](docs/ErrorData.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [ExerciseAliasData](docs/ExerciseAliasData.md)
 - [ExerciseAliasListResponse](docs/ExerciseAliasListResponse.md)
 - [ExerciseAliasListResponseMeta](docs/ExerciseAliasListResponseMeta.md)
 - [ExerciseAliasResponse](docs/ExerciseAliasResponse.md)
 - [ExerciseAliasSorting](docs/ExerciseAliasSorting.md)
 - [ExerciseOrdinalSetAssignmentData](docs/ExerciseOrdinalSetAssignmentData.md)
 - [ExerciseOrdinalSetAssignmentListResponse](docs/ExerciseOrdinalSetAssignmentListResponse.md)
 - [ExerciseOrdinalSetAssignmentListResponseMeta](docs/ExerciseOrdinalSetAssignmentListResponseMeta.md)
 - [ExerciseOrdinalSetAssignmentResponse](docs/ExerciseOrdinalSetAssignmentResponse.md)
 - [ExerciseOrdinalSetAssignmentSorting](docs/ExerciseOrdinalSetAssignmentSorting.md)
 - [ExerciseOrdinalSetData](docs/ExerciseOrdinalSetData.md)
 - [ExerciseOrdinalSetListResponse](docs/ExerciseOrdinalSetListResponse.md)
 - [ExerciseOrdinalSetListResponseMeta](docs/ExerciseOrdinalSetListResponseMeta.md)
 - [ExerciseOrdinalSetResponse](docs/ExerciseOrdinalSetResponse.md)
 - [ExerciseOrdinalSetSorting](docs/ExerciseOrdinalSetSorting.md)
 - [FacilityAccessControlData](docs/FacilityAccessControlData.md)
 - [FacilityAccessControlIPRangeData](docs/FacilityAccessControlIPRangeData.md)
 - [FacilityAccessControlIPRangeListResponse](docs/FacilityAccessControlIPRangeListResponse.md)
 - [FacilityAccessControlIPRangeListResponseMeta](docs/FacilityAccessControlIPRangeListResponseMeta.md)
 - [FacilityAccessControlIPRangeResponse](docs/FacilityAccessControlIPRangeResponse.md)
 - [FacilityAccessControlIPRangeSorting](docs/FacilityAccessControlIPRangeSorting.md)
 - [FacilityAccessControlKioskData](docs/FacilityAccessControlKioskData.md)
 - [FacilityAccessControlKioskResponse](docs/FacilityAccessControlKioskResponse.md)
 - [FacilityAccessControlResponse](docs/FacilityAccessControlResponse.md)
 - [FacilityCardioMachineData](docs/FacilityCardioMachineData.md)
 - [FacilityCardioMachineListResponse](docs/FacilityCardioMachineListResponse.md)
 - [FacilityCardioMachineListResponseMeta](docs/FacilityCardioMachineListResponseMeta.md)
 - [FacilityCardioMachineResponse](docs/FacilityCardioMachineResponse.md)
 - [FacilityConfigurationData](docs/FacilityConfigurationData.md)
 - [FacilityConfigurationResponse](docs/FacilityConfigurationResponse.md)
 - [FacilityData](docs/FacilityData.md)
 - [FacilityEmployeeRole](docs/FacilityEmployeeRole.md)
 - [FacilityInBodyIntegrationData](docs/FacilityInBodyIntegrationData.md)
 - [FacilityInBodyIntegrationResponse](docs/FacilityInBodyIntegrationResponse.md)
 - [FacilityKioskTokenResponse](docs/FacilityKioskTokenResponse.md)
 - [FacilityLicenseData](docs/FacilityLicenseData.md)
 - [FacilityLicenseListResponse](docs/FacilityLicenseListResponse.md)
 - [FacilityLicenseListResponseMeta](docs/FacilityLicenseListResponseMeta.md)
 - [FacilityLicenseResponse](docs/FacilityLicenseResponse.md)
 - [FacilityLicenseSorting](docs/FacilityLicenseSorting.md)
 - [FacilityListResponse](docs/FacilityListResponse.md)
 - [FacilityListResponseMeta](docs/FacilityListResponseMeta.md)
 - [FacilityProfileData](docs/FacilityProfileData.md)
 - [FacilityProfileResponse](docs/FacilityProfileResponse.md)
 - [FacilityRelationshipData](docs/FacilityRelationshipData.md)
 - [FacilityRelationshipRequestData](docs/FacilityRelationshipRequestData.md)
 - [FacilityRelationshipRequestListResponse](docs/FacilityRelationshipRequestListResponse.md)
 - [FacilityRelationshipRequestListResponseMeta](docs/FacilityRelationshipRequestListResponseMeta.md)
 - [FacilityRelationshipRequestResponse](docs/FacilityRelationshipRequestResponse.md)
 - [FacilityRelationshipRequestSorting](docs/FacilityRelationshipRequestSorting.md)
 - [FacilityRelationshipResponse](docs/FacilityRelationshipResponse.md)
 - [FacilityResponse](docs/FacilityResponse.md)
 - [FacilitySessionListResponse](docs/FacilitySessionListResponse.md)
 - [FacilitySessionListResponseMeta](docs/FacilitySessionListResponseMeta.md)
 - [FacilitySessionUserData](docs/FacilitySessionUserData.md)
 - [FacilitySorting](docs/FacilitySorting.md)
 - [FacilityStrengthMachineBulkCreateResponse](docs/FacilityStrengthMachineBulkCreateResponse.md)
 - [FacilityStrengthMachineConfigurationData](docs/FacilityStrengthMachineConfigurationData.md)
 - [FacilityStrengthMachineConfigurationResponse](docs/FacilityStrengthMachineConfigurationResponse.md)
 - [FacilityStrengthMachineData](docs/FacilityStrengthMachineData.md)
 - [FacilityStrengthMachineInitializerOTPTokenResponse](docs/FacilityStrengthMachineInitializerOTPTokenResponse.md)
 - [FacilityStrengthMachineInitializerTokenResponse](docs/FacilityStrengthMachineInitializerTokenResponse.md)
 - [FacilityStrengthMachineListResponse](docs/FacilityStrengthMachineListResponse.md)
 - [FacilityStrengthMachineListResponseMeta](docs/FacilityStrengthMachineListResponseMeta.md)
 - [FacilityStrengthMachineMaintenanceRecordData](docs/FacilityStrengthMachineMaintenanceRecordData.md)
 - [FacilityStrengthMachineMaintenanceRecordListResponse](docs/FacilityStrengthMachineMaintenanceRecordListResponse.md)
 - [FacilityStrengthMachineMaintenanceRecordResponse](docs/FacilityStrengthMachineMaintenanceRecordResponse.md)
 - [FacilityStrengthMachineMaintenanceRecordsMeta](docs/FacilityStrengthMachineMaintenanceRecordsMeta.md)
 - [FacilityStrengthMachineResponse](docs/FacilityStrengthMachineResponse.md)
 - [FacilityStrengthMachineSorting](docs/FacilityStrengthMachineSorting.md)
 - [FacilityStrengthMachineUtilizationInstanceData](docs/FacilityStrengthMachineUtilizationInstanceData.md)
 - [FacilityStrengthMachineUtilizationInstanceListResponse](docs/FacilityStrengthMachineUtilizationInstanceListResponse.md)
 - [FacilityStrengthMachineUtilizationInstanceResponse](docs/FacilityStrengthMachineUtilizationInstanceResponse.md)
 - [FacilityStrengthMachineUtilizationInstancesMeta](docs/FacilityStrengthMachineUtilizationInstancesMeta.md)
 - [FacilityUserRelationshipListResponse](docs/FacilityUserRelationshipListResponse.md)
 - [FacilityUserRelationshipListResponseMeta](docs/FacilityUserRelationshipListResponseMeta.md)
 - [FacilityUserRelationshipSorting](docs/FacilityUserRelationshipSorting.md)
 - [FacilityUserResponse](docs/FacilityUserResponse.md)
 - [FingerprintData](docs/FingerprintData.md)
 - [HealthResponse](docs/HealthResponse.md)
 - [HeartRateDataPointData](docs/HeartRateDataPointData.md)
 - [HeartRateDataSetData](docs/HeartRateDataSetData.md)
 - [HeartRateDataSetListResponse](docs/HeartRateDataSetListResponse.md)
 - [HeartRateDataSetListResponseMeta](docs/HeartRateDataSetListResponseMeta.md)
 - [HeartRateDataSetResponse](docs/HeartRateDataSetResponse.md)
 - [HeartRateDataSetSessionData](docs/HeartRateDataSetSessionData.md)
 - [HeartRateDataSetSorting](docs/HeartRateDataSetSorting.md)
 - [HeightMeasurementData](docs/HeightMeasurementData.md)
 - [HeightMeasurementListResponse](docs/HeightMeasurementListResponse.md)
 - [HeightMeasurementListResponseMeta](docs/HeightMeasurementListResponseMeta.md)
 - [HeightMeasurementResponse](docs/HeightMeasurementResponse.md)
 - [HeightMeasurementSorting](docs/HeightMeasurementSorting.md)
 - [KioskSessionResponse](docs/KioskSessionResponse.md)
 - [ListMeta](docs/ListMeta.md)
 - [MSeriesAppSessionData](docs/MSeriesAppSessionData.md)
 - [MSeriesAppSessionExportResponse](docs/MSeriesAppSessionExportResponse.md)
 - [MSeriesAppSessionListResponse](docs/MSeriesAppSessionListResponse.md)
 - [MSeriesAppSessionListResponseMeta](docs/MSeriesAppSessionListResponseMeta.md)
 - [MSeriesAppSessionResponse](docs/MSeriesAppSessionResponse.md)
 - [MSeriesChallengeData](docs/MSeriesChallengeData.md)
 - [MSeriesChallengeListResponse](docs/MSeriesChallengeListResponse.md)
 - [MSeriesChallengeListResponseMeta](docs/MSeriesChallengeListResponseMeta.md)
 - [MSeriesChallengeParticipantData](docs/MSeriesChallengeParticipantData.md)
 - [MSeriesChallengeParticipantListResponse](docs/MSeriesChallengeParticipantListResponse.md)
 - [MSeriesChallengeParticipantListResponseMeta](docs/MSeriesChallengeParticipantListResponseMeta.md)
 - [MSeriesChallengeParticipantResponse](docs/MSeriesChallengeParticipantResponse.md)
 - [MSeriesChallengeParticipantSorting](docs/MSeriesChallengeParticipantSorting.md)
 - [MSeriesChallengeRelationship](docs/MSeriesChallengeRelationship.md)
 - [MSeriesChallengeResponse](docs/MSeriesChallengeResponse.md)
 - [MSeriesChallengeSorting](docs/MSeriesChallengeSorting.md)
 - [MSeriesDataPointData](docs/MSeriesDataPointData.md)
 - [MSeriesDataSetData](docs/MSeriesDataSetData.md)
 - [MSeriesDataSetListResponse](docs/MSeriesDataSetListResponse.md)
 - [MSeriesDataSetListResponseMeta](docs/MSeriesDataSetListResponseMeta.md)
 - [MSeriesDataSetResponse](docs/MSeriesDataSetResponse.md)
 - [MSeriesDataSetSegmentData](docs/MSeriesDataSetSegmentData.md)
 - [MSeriesDataSetSegmentResponse](docs/MSeriesDataSetSegmentResponse.md)
 - [MSeriesDataSetSorting](docs/MSeriesDataSetSorting.md)
 - [MSeriesFtpMeasurementData](docs/MSeriesFtpMeasurementData.md)
 - [MSeriesFtpMeasurementListResponse](docs/MSeriesFtpMeasurementListResponse.md)
 - [MSeriesFtpMeasurementListResponseMeta](docs/MSeriesFtpMeasurementListResponseMeta.md)
 - [MSeriesFtpMeasurementResponse](docs/MSeriesFtpMeasurementResponse.md)
 - [MSeriesFtpMeasurementSorting](docs/MSeriesFtpMeasurementSorting.md)
 - [MSeriesProfileStatsData](docs/MSeriesProfileStatsData.md)
 - [MSeriesProfileStatsResponse](docs/MSeriesProfileStatsResponse.md)
 - [MachineAdjustmentData](docs/MachineAdjustmentData.md)
 - [MachineAdjustmentListResponse](docs/MachineAdjustmentListResponse.md)
 - [MachineAdjustmentListResponseMeta](docs/MachineAdjustmentListResponseMeta.md)
 - [MachineAdjustmentResponse](docs/MachineAdjustmentResponse.md)
 - [MuscleArea](docs/MuscleArea.md)
 - [MuscleData](docs/MuscleData.md)
 - [MuscleGroup](docs/MuscleGroup.md)
 - [MuscleIdentifier](docs/MuscleIdentifier.md)
 - [MuscleSorting](docs/MuscleSorting.md)
 - [MuscleTargetLevel](docs/MuscleTargetLevel.md)
 - [OAuthServiceData](docs/OAuthServiceData.md)
 - [OAuthServiceListResponse](docs/OAuthServiceListResponse.md)
 - [OAuthServiceListResponseMeta](docs/OAuthServiceListResponseMeta.md)
 - [OAuthServiceResponse](docs/OAuthServiceResponse.md)
 - [OAuthServiceSorting](docs/OAuthServiceSorting.md)
 - [OauthResponse](docs/OauthResponse.md)
 - [PrimaryEmailAddressData](docs/PrimaryEmailAddressData.md)
 - [PrimaryEmailAddressResponse](docs/PrimaryEmailAddressResponse.md)
 - [PrivilegedFacilityRelationshipRequestListResponse](docs/PrivilegedFacilityRelationshipRequestListResponse.md)
 - [PrivilegedFacilityRelationshipRequestListResponseMeta](docs/PrivilegedFacilityRelationshipRequestListResponseMeta.md)
 - [PrivilegedFacilityRelationshipRequestSorting](docs/PrivilegedFacilityRelationshipRequestSorting.md)
 - [ProfileData](docs/ProfileData.md)
 - [ProfileResponse](docs/ProfileResponse.md)
 - [RedirectResponse](docs/RedirectResponse.md)
 - [SessionData](docs/SessionData.md)
 - [SessionListResponse](docs/SessionListResponse.md)
 - [SessionListResponseMeta](docs/SessionListResponseMeta.md)
 - [SessionPlanActivitySetData](docs/SessionPlanActivitySetData.md)
 - [SessionPlanActivitySetTemplateData](docs/SessionPlanActivitySetTemplateData.md)
 - [SessionPlanCardioSetData](docs/SessionPlanCardioSetData.md)
 - [SessionPlanCardioSetTemplateData](docs/SessionPlanCardioSetTemplateData.md)
 - [SessionPlanData](docs/SessionPlanData.md)
 - [SessionPlanListResponse](docs/SessionPlanListResponse.md)
 - [SessionPlanMeta](docs/SessionPlanMeta.md)
 - [SessionPlanResponse](docs/SessionPlanResponse.md)
 - [SessionPlanSequenceAssignmentData](docs/SessionPlanSequenceAssignmentData.md)
 - [SessionPlanSequenceAssignmentTemplateData](docs/SessionPlanSequenceAssignmentTemplateData.md)
 - [SessionPlanSequenceData](docs/SessionPlanSequenceData.md)
 - [SessionPlanSequenceInstanceData](docs/SessionPlanSequenceInstanceData.md)
 - [SessionPlanSequenceInstanceListResponse](docs/SessionPlanSequenceInstanceListResponse.md)
 - [SessionPlanSequenceInstanceMeta](docs/SessionPlanSequenceInstanceMeta.md)
 - [SessionPlanSequenceInstanceResponse](docs/SessionPlanSequenceInstanceResponse.md)
 - [SessionPlanSequenceListResponse](docs/SessionPlanSequenceListResponse.md)
 - [SessionPlanSequenceMeta](docs/SessionPlanSequenceMeta.md)
 - [SessionPlanSequenceResponse](docs/SessionPlanSequenceResponse.md)
 - [SessionPlanSequenceTemplateData](docs/SessionPlanSequenceTemplateData.md)
 - [SessionPlanSequenceTemplateListResponse](docs/SessionPlanSequenceTemplateListResponse.md)
 - [SessionPlanSequenceTemplateResponse](docs/SessionPlanSequenceTemplateResponse.md)
 - [SessionPlanSetData](docs/SessionPlanSetData.md)
 - [SessionPlanSetInstanceData](docs/SessionPlanSetInstanceData.md)
 - [SessionPlanSetInstanceResponse](docs/SessionPlanSetInstanceResponse.md)
 - [SessionPlanSetListResponse](docs/SessionPlanSetListResponse.md)
 - [SessionPlanSetMeta](docs/SessionPlanSetMeta.md)
 - [SessionPlanSetResponse](docs/SessionPlanSetResponse.md)
 - [SessionPlanSetTemplateData](docs/SessionPlanSetTemplateData.md)
 - [SessionPlanSetTemplateListResponse](docs/SessionPlanSetTemplateListResponse.md)
 - [SessionPlanSetTemplateMeta](docs/SessionPlanSetTemplateMeta.md)
 - [SessionPlanSetTemplateResponse](docs/SessionPlanSetTemplateResponse.md)
 - [SessionPlanStrengthSetData](docs/SessionPlanStrengthSetData.md)
 - [SessionPlanStrengthSetTemplateData](docs/SessionPlanStrengthSetTemplateData.md)
 - [SessionPlanStretchSetData](docs/SessionPlanStretchSetData.md)
 - [SessionPlanStretchSetTemplateData](docs/SessionPlanStretchSetTemplateData.md)
 - [SessionPlanTemplateData](docs/SessionPlanTemplateData.md)
 - [SessionPlanTemplateListResponse](docs/SessionPlanTemplateListResponse.md)
 - [SessionPlanTemplateMeta](docs/SessionPlanTemplateMeta.md)
 - [SessionPlanTemplateResponse](docs/SessionPlanTemplateResponse.md)
 - [SessionPlansequenceTemplateMeta](docs/SessionPlansequenceTemplateMeta.md)
 - [SessionResponse](docs/SessionResponse.md)
 - [SessionSorting](docs/SessionSorting.md)
 - [SessionStartResponse](docs/SessionStartResponse.md)
 - [StatusResponse](docs/StatusResponse.md)
 - [StrengthExerciseCategory](docs/StrengthExerciseCategory.md)
 - [StrengthExerciseData](docs/StrengthExerciseData.md)
 - [StrengthExerciseListResponse](docs/StrengthExerciseListResponse.md)
 - [StrengthExerciseListResponseMeta](docs/StrengthExerciseListResponseMeta.md)
 - [StrengthExerciseMovement](docs/StrengthExerciseMovement.md)
 - [StrengthExerciseMovementDEP](docs/StrengthExerciseMovementDEP.md)
 - [StrengthExerciseMuscleListResponse](docs/StrengthExerciseMuscleListResponse.md)
 - [StrengthExerciseMuscleListResponseMeta](docs/StrengthExerciseMuscleListResponseMeta.md)
 - [StrengthExerciseMuscleResponse](docs/StrengthExerciseMuscleResponse.md)
 - [StrengthExercisePlane](docs/StrengthExercisePlane.md)
 - [StrengthExerciseResponse](docs/StrengthExerciseResponse.md)
 - [StrengthExerciseSorting](docs/StrengthExerciseSorting.md)
 - [StrengthExerciseVariantData](docs/StrengthExerciseVariantData.md)
 - [StrengthExerciseVariantListResponse](docs/StrengthExerciseVariantListResponse.md)
 - [StrengthExerciseVariantListResponseMeta](docs/StrengthExerciseVariantListResponseMeta.md)
 - [StrengthExerciseVariantResponse](docs/StrengthExerciseVariantResponse.md)
 - [StrengthExerciseVariantSorting](docs/StrengthExerciseVariantSorting.md)
 - [StrengthMachineData](docs/StrengthMachineData.md)
 - [StrengthMachineDataSetData](docs/StrengthMachineDataSetData.md)
 - [StrengthMachineDataSetExportResponse](docs/StrengthMachineDataSetExportResponse.md)
 - [StrengthMachineDataSetListResponse](docs/StrengthMachineDataSetListResponse.md)
 - [StrengthMachineDataSetListResponseMeta](docs/StrengthMachineDataSetListResponseMeta.md)
 - [StrengthMachineDataSetResponse](docs/StrengthMachineDataSetResponse.md)
 - [StrengthMachineDataSetSorting](docs/StrengthMachineDataSetSorting.md)
 - [StrengthMachineDataSetTestData](docs/StrengthMachineDataSetTestData.md)
 - [StrengthMachineDataSetTestSubsetData](docs/StrengthMachineDataSetTestSubsetData.md)
 - [StrengthMachineHistoryListResponse](docs/StrengthMachineHistoryListResponse.md)
 - [StrengthMachineHistoryMeta](docs/StrengthMachineHistoryMeta.md)
 - [StrengthMachineInitializeResponse](docs/StrengthMachineInitializeResponse.md)
 - [StrengthMachineListResponse](docs/StrengthMachineListResponse.md)
 - [StrengthMachineListResponseMeta](docs/StrengthMachineListResponseMeta.md)
 - [StrengthMachineModelData](docs/StrengthMachineModelData.md)
 - [StrengthMachineProfileStatsData](docs/StrengthMachineProfileStatsData.md)
 - [StrengthMachineProfileStatsResponse](docs/StrengthMachineProfileStatsResponse.md)
 - [StrengthMachineResponse](docs/StrengthMachineResponse.md)
 - [StrengthMachineSorting](docs/StrengthMachineSorting.md)
 - [StretchExerciseData](docs/StretchExerciseData.md)
 - [StretchExerciseListResponse](docs/StretchExerciseListResponse.md)
 - [StretchExerciseListResponseMeta](docs/StretchExerciseListResponseMeta.md)
 - [StretchExerciseMuscleListResponse](docs/StretchExerciseMuscleListResponse.md)
 - [StretchExerciseMuscleListResponseMeta](docs/StretchExerciseMuscleListResponseMeta.md)
 - [StretchExerciseMuscleResponse](docs/StretchExerciseMuscleResponse.md)
 - [StretchExerciseResponse](docs/StretchExerciseResponse.md)
 - [StretchExerciseSorting](docs/StretchExerciseSorting.md)
 - [StretchExerciseVariantData](docs/StretchExerciseVariantData.md)
 - [StretchExerciseVariantListResponse](docs/StretchExerciseVariantListResponse.md)
 - [StretchExerciseVariantListResponseMeta](docs/StretchExerciseVariantListResponseMeta.md)
 - [StretchExerciseVariantResponse](docs/StretchExerciseVariantResponse.md)
 - [StretchExerciseVariantSorting](docs/StretchExerciseVariantSorting.md)
 - [SubscriptionResponse](docs/SubscriptionResponse.md)
 - [TimeResponse](docs/TimeResponse.md)
 - [UserApplicationAuthorizationData](docs/UserApplicationAuthorizationData.md)
 - [UserApplicationAuthorizationDeveloperListResponse](docs/UserApplicationAuthorizationDeveloperListResponse.md)
 - [UserApplicationAuthorizationMeta](docs/UserApplicationAuthorizationMeta.md)
 - [UserApplicationAuthorizationResponse](docs/UserApplicationAuthorizationResponse.md)
 - [UserApplicationAuthorizationUserListResponse](docs/UserApplicationAuthorizationUserListResponse.md)
 - [UserData](docs/UserData.md)
 - [UserFacilityRelationshipListResponse](docs/UserFacilityRelationshipListResponse.md)
 - [UserFacilityRelationshipListResponseMeta](docs/UserFacilityRelationshipListResponseMeta.md)
 - [UserFacilityRelationshipSorting](docs/UserFacilityRelationshipSorting.md)
 - [UserInBodyIntegrationData](docs/UserInBodyIntegrationData.md)
 - [UserInBodyIntegrationResponse](docs/UserInBodyIntegrationResponse.md)
 - [UserResponse](docs/UserResponse.md)
 - [WeightMeasurementData](docs/WeightMeasurementData.md)
 - [WeightMeasurementListResponse](docs/WeightMeasurementListResponse.md)
 - [WeightMeasurementListResponseMeta](docs/WeightMeasurementListResponseMeta.md)
 - [WeightMeasurementResponse](docs/WeightMeasurementResponse.md)
 - [WeightMeasurementSorting](docs/WeightMeasurementSorting.md)
 - [Zones](docs/Zones.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### bearerAuth

- **Type**: Bearer authentication (JWT)



## Copyright and License
Copyright © 2020 [Keiser Corporation](http://keiser.com/).

The Keiser Metrics SDK source code and distributed package are made available through the [MIT license](LICENSE.md).

Using any of the APIs made available through the Keiser Metrics SDK to communicate with [Keiser Metrics](https://metrics.keiser.com) make you subject to the following agreements. Please read all documents in their entirety as they govern your use of the APIs and Keiser Metrics servers.
- [API Agreement](https://dev.keiser.com/api-agreement/)
- [Brand Guidelines for Developers](https://dev.keiser.com/brand-guidelines/)