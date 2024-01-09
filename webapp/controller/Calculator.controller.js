sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast) {
        "use strict";

        return Controller.extend("com.calculator.calculator.controller.Calculator", {
            value: "",
            onInit: function () {

            },
            onPress: function (oEvent) {
                var val = oEvent.getSource().getText()
                this.value += val;
                this.getView().byId("calScreen").setValue(this.value);
                },

            
            onClear: function () {
                    this.value = ''
                    this.getView().byId("calScreen").setValue("");
            },
            onCalculate: function () {
            
                if (this.value.includes('+')){
                    const valList = this.value.split('+');
                    const res = valList.reduce((a, b) => parseInt(a) + parseInt(b));
                    console.log(res)
                    this.getView().byId("calScreen").setValue(res);
                } else if (this.value.includes('-')){
                    const valList = this.value.split('-');
                    const res = valList.reduce((a, b) => parseInt(a) - parseInt(b));
                    console.log(res)
                    this.getView().byId("calScreen").setValue(res);
                } else if (this.value.includes('*')){
                    const valList = this.value.split('*');
                    const res = valList.reduce((a, b) => parseInt(a) * parseInt(b));
                    console.log(res)
                    this.getView().byId("calScreen").setValue(res);
                } else if (this.value.includes('/')) {
                    const valList = this.value.split('/');
                    const res = valList.reduce((a, b) => parseInt(a) / parseInt(b));
                    console.log(res)
                    this.getView().byId("calScreen").setValue(res);
                }
                MessageToast.show.value();
            },
        });
    });
