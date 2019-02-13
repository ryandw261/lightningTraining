({
    loadRecords : function(component, event, helper) {
        var action = component.get("c.getBMI");
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                component.set("v.bmiList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },

    addRecordToList : function(component, event, helper){
        var list = component.get("v.bmiList");
        var record = event.getParam("record");
        list.push(record);
        component.set("v.bmiList", list);
    }
})
