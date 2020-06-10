sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/ObjectListItem",
	"sap/m/ObjectAttribute"
], function(Controller, ObjectListItem, ObjectAttribute) {
	"use strict";

	return Controller.extend("ns.MOCKSERVER_MODULE.controller.MOCKSERVER_View1", {
		/**
		 * Responds to the button press event.
		 * Upon pressing, we bind the items aggregation of the list to the "Meetups" entityset.
		 * We pass a custom URL parameter "first=3" (assuming our OData BE knows how to process it).
		 */
		onPress:function(oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				titlePath: window.encodeURIComponent(oItem.getBindingContext("ddata").getPath().substr(1))
			});
		}      
	});

});