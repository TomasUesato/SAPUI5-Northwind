sap.ui.define([], function() {
    "user strict";
    return {
        model: {

            I18N: "i18n",

        },

        properties: {
            TOOLS_MODEL: {
                name: "/name"
            }
        },

        entity : {
            orderDetails : "/V3/Northwind/Northwind.svc/Order_Details",
            orders : "/V3/Northwind/Northwind.svc/Orders"
        },

        ids: {
            FRAGMENTS: {
                OrderDetail: "dialog"
            }
        },

        routes: {
            detail: "RouteDetail",
            main: "Main",
            FRAGMENTS: {
                OrderDetail: "Ejercicio20.Ejercicio20.Fragments.Detail"
            },
            MODELS: {
                details: "modelOrderDetails",
                modelOrders: "modelOrders"
            }
        }
    };
}, true);