// Assignment

Backend---

2 Apis are created. One is for creating the order and second api is for generating the pdf of order invoice and send as response when requested from frontend.

Apis--
1. createOrder
2. showAllOrders

## createOrder Api-
it creates the order in backend.OrderForm module in frontend folder use this api to create order

## order_invoice.pdf

-- pdf file is being saved inside controllers folder after generation at backend..

## packages-
--pdfkit
--fs
--mongoose
--express

Frontend---

## modules used--
-- OrderForm.js(Allows user to create order)
-- Orders.js(allows user to download the order invoice)

## Routing
--react routing is used to navigate to create order and show order invoice page.
--home and create order tab navigates to create order form..
--show order invoice tav in navbar navigates to the page where order invoice pdf file can be downloaded..



