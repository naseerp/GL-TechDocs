
import { isEqualObjects,baseApiUrl } from "../helpers.js";
export {mockhandlers};
var loginApiUrl = baseApiUrl + "login";
var successfulAuthToken = "123456"
var successfulLoginData = { 
    loginType:"email",
    email:'admin@techdocs.com', 
    password : 'admin123',
    rememberMe : 1
}

var loginResponseSuccess = {
    
    authToken: successfulAuthToken,
    message:"Logged in successfully"
}
var loginResponseFailure = {

    message:"MOCK : Invalid userid or password"
}
var mockLoginSuccess={
    url: loginApiUrl,
    data: function( data ) {
        return isEqualObjects( data, successfulLoginData );
      },
    status:200,
    responseText:loginResponseSuccess
  };

  var mockLoginFailure={
    url: loginApiUrl,
    data: function( data ) {
        return !isEqualObjects( data, successfulLoginData );
      },
    status:401,
    responseText:loginResponseFailure
  };
  
  var mockhandlers=
    [mockLoginSuccess,
     mockLoginFailure
    ];
  
