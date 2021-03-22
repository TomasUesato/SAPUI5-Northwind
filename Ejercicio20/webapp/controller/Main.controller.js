sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "Ejercicio20/Ejercicio20/util/Services",
        "sap/ui/core/Fragment",
        "Ejercicio20/Ejercicio20/util/Constants"

        
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel, Services, Fragment, Constants) {
		"use strict";

		return Controller.extend("Ejercicio20.Ejercicio20.controller.Main", {
			onInit: function () {
                this.loadModelOrderDetails();
                this.loadModelOrders();
            },
            loadModelOrderDetails: async function() {
                let oComponent = this.getOwnerComponent();
                let oResponse = await Services.getOrderDetails();
                let oData = oResponse[0];
                var oProducts = new JSONModel();
                oProducts.setData(oData);
                oComponent.setModel(oProducts, Constants.routes.MODELS.details);
            },

             loadModelOrders: async function(oItemId) {
                let oComponent = this.getOwnerComponent();
                let oResponse = await Services.getOrders(oItemId);
                let oData = oResponse[0];
                var oProducts = new JSONModel();
                oProducts.setData(oData);
                oComponent.setModel(oProducts, Constants.routes.MODELS.modelOrders);
            },

            onListItemPress: function (oEvent) {
                let oItem = oEvent.getSource();
                let oBindingContext = oItem.getBindingContext(Constants.routes.MODELS.details);

                let oModel = this.getOwnerComponent().getModel(Constants.routes.MODELS.details);
                let oItemSeleccionado = oModel.getProperty(oBindingContext.getPath());

                let oIdItem = oItemSeleccionado.OrderID;
                this.loadModelOrders(oIdItem);
                                
                this.getOwnerComponent().getRouter().navTo(Constants.routes.detail);

            }
            
		});
	});