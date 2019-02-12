({
    doInit: function(component) {
        if(component.get("v.height") < 0 || component.get("v.height") == null) {
            alert('Height is blank, lets add some default value');
            component.set("v.height", "1.72");
        }
        
    },
    calculate : function(component, event, helper) {
        helper.calculateBMIVal(component, event, helper);
	}
})
