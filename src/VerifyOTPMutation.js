import {commitMutation, graphql} from 'react-relay'
import environment from './Environment'

const mutation = graphql`
  mutation VerifyOTPMutation($input: OTPVerificationInput!) {
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
`
const DeviceType = 'Web'
const DeviceUniqueID = 'device_web'
// const PhoneNumber = '9515262181'
const Otp = '123556'
const CountryCode = '+91'
const NotificationMode = 'ExponentPushToken[nZZ_QnCqUi2DLMYuMJ-omT]'
const Token = '9704448878'

export default (PhoneNumber) => {
  alert("hai")
  const variables = {
    input: {
      DeviceType,
      DeviceUniqueID,
      PhoneNumber,
      Otp,
      CountryCode,
      NotificationMode,
      Token,
    },
  }
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: response => {
      alert("completed successfully")
    },
    onError: err => {alert(err),console.log("ERR",err)}
  })
}
