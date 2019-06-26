/**
 * @flow
 * @relayHash 655b963f70fad1370639d838b0423c9e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OTPVerificationInput = {|
  DeviceType: string,
  DeviceUniqueID: string,
  PhoneNumber: string,
  Token: string,
  Otp: string,
  CountryCode: string,
  NotificationMode: string,
  clientMutationId?: ?string,
|};
export type VerifyOTPMutationVariables = {|
  input: OTPVerificationInput
|};
export type VerifyOTPMutationResponse = {|
  +verifyOTP: ?{|
    +verifyOTP: ?{|
      +Status: ?string,
      +Response: ?{|
        +UserId: ?string,
        +UserGuid: ?string,
        +PhoneNumber: ?string,
        +LoginId: ?string,
        +Token: ?string,
        +DeviceGuid: ?string,
        +NickName: ?string,
        +ShowUpcomingEvents: ?string,
      |},
    |}
  |}
|};
export type VerifyOTPMutation = {|
  variables: VerifyOTPMutationVariables,
  response: VerifyOTPMutationResponse,
|};
*/


/*
mutation VerifyOTPMutation(
  $input: OTPVerificationInput!
) {
  verifyOTP(input: $input) {
    verifyOTP {
      Status
      Response {
        UserId
        UserGuid
        PhoneNumber
        LoginId
        Token
        DeviceGuid
        NickName
        ShowUpcomingEvents
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "OTPVerificationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "verifyOTP",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "OTPVerificationInput!"
      }
    ],
    "concreteType": "OTPVerificationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "verifyOTP",
        "storageKey": null,
        "args": null,
        "concreteType": "VerifyOTP",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "Status",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "Response",
            "storageKey": null,
            "args": null,
            "concreteType": "VerifyResponse",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "UserId",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "UserGuid",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "PhoneNumber",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "LoginId",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "Token",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "DeviceGuid",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "NickName",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "ShowUpcomingEvents",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "VerifyOTPMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "VerifyOTPMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "VerifyOTPMutation",
    "id": null,
    "text": "mutation VerifyOTPMutation(\n  $input: OTPVerificationInput!\n) {\n  verifyOTP(input: $input) {\n    verifyOTP {\n      Status\n      Response {\n        UserId\n        UserGuid\n        PhoneNumber\n        LoginId\n        Token\n        DeviceGuid\n        NickName\n        ShowUpcomingEvents\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0e6472913004b14590ff4f7744d2a3fd';
module.exports = node;
