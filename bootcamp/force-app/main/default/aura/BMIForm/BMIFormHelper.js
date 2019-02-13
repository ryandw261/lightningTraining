({
    calculateBMIVal : function(component, event, helper) {

        var heightVal = component.get("v.height");
        var weightVal = component.get("v.weight");
        var bmiVal = (weightVal * 0.45)/ (heightVal*heightVal) ;
        component.set("v.bmi", bmiVal);
        
        var displayBox = component.find("display");
        if(component.get("v.bmi") >= 20.0) {
           $A.util.removeClass(displayBox, 'is-risk');
           $A.util.addClass(displayBox, 'no-risk'); 
        } else{
           $A.util.addClass(displayBox, 'is-risk');
           $A.util.removeClass(displayBox, 'no-risk'); 
        }

        var compEvent = component.getEvent("BMIMessage");
        compEvent.setParams({
            bmiMessageParam : "Message from BMI Form"
        });
        compEvent.fire();
    },

    submitBMI : function(component, event, helper){
        var action = component.get("c.insertBMI");
        var bmiRound = Math.round(component.get("v.bmi") * 100) / 100;
        action.setParams({
            height : component.get("v.height"),
            weight : component.get("v.weight"),
            bmi : bmiRound
        });
        console.log(bmiRound);

        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var applicationEvent = $A.get("e.c:BMIInsertEvent");
				applicationEvent.setParams({
					"record" : response.getReturnValue()
				});
				applicationEvent.fire();
            }
        });
        $A.enqueueAction(action);
    }

})
