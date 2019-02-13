({
    doInit : function(component, event, helper) {
        helper.loadRecords(component, event, helper);
    },
    handleBMIEvent : function(component, event, helper){
        helper.addRecordToList(component, event,helper);
    }
})
