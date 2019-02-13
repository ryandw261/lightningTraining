public with sharing class BMIController {
    @AuraEnabled
    public static List<BMI__c> getBMI (){
        return [SELECT Id, Weight__c, Height__c, BMI__c FROM BMI__c  ORDER BY createdDate LIMIT 100];
    }

    @AuraEnabled
    public static BMI__c insertBMI(Double height, Double weight, Double bmi){
        
        BMI__c bmiObject = new BMI__c(Height__c = height, Weight__c = weight, BMI__c = bmi);
        insert bmiObject;
        return bmiObject;
    }
}
