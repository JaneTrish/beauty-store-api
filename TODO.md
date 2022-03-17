#Create a trigger on cart table, so that when an item added, updated or deleted, it would recalculate the total price of all items in the cart, using data from the database, not frontend.
#Consider removing "price" column from cart_item (will frontend use it? )

#delete cart if there are no items in there

#ADDED A TRIGGER ON CART IN DB, SO THAT TOTAL PRICE CALCULATED FROM PRICE DATA THAT IS IN THE DATABASE AND NOT THE ONE, RECEIVED FROM FRONTEND
