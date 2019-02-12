<aura:application>

    <aura:attribute name="height" type="Decimal"/>
    <aura:attribute name="weight" type="Decimal" default="75"/>

    <div class="slds-scope">
        <c:BMIForm height="{!v.height}" weight="{!v.weight}"></c:BMIForm>
    </div>

</aura:application>	
