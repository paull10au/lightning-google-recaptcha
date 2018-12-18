({
    doInit: function (component, event, helper) {
        //example: "https://customer-connect-9256-dev-ed--c.visualforce.com";
        var vfOrigin = component.get("v.vfurl");
        
        window.addEventListener("message", function (event) {
            if (event.origin !== vfOrigin) {
                // Not the expected origin: Reject the message!
                return;
            }
            
            if (event.data.action === "reCaptchaCallingAura") {
                if (event.data.alohaResponseCAPTCHA === "NOK") {
                    component.set("v.valid", false);
                } else if (event.data.alohaResponseCAPTCHA === "OK") {
                    component.set("v.valid", true);
                }
            }
        }, false);
    }
})