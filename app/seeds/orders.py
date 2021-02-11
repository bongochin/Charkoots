from app.models import db, Order

# Adds a demo user, you can add other users here if you want
def seed_orders():

    order1 = Order(
        board_id=1,
        wine_id=1,
        shipping_address1 = '1600 Pennsylvania Avenue',
        shipping_address2 = 'West Wing',
        shipping_city = 'Washington',
        shipping_state = 'DC',
        shipping_zipcode = '20500'
    )

    db.session.add(order1)
    db.session.commit()

    # =====================================================

    order2 = Order(
        board_id=2,
        wine_id=2,
        shipping_address1 = '1600 Pennsylvania Avenue',
        shipping_address2 = 'West Wing',
        shipping_city = 'Washington',
        shipping_state = 'DC',
        shipping_zipcode = '20500'
    )

    db.session.add(order2)
    db.session.commit()

    # =====================================================

    order3 = Order(
        board_id=1,
        wine_id=2,
        shipping_address1 = '1600 Pennsylvania Avenue',
        shipping_address2 = 'West Wing',
        shipping_city = 'Washington',
        shipping_state = 'DC',
        shipping_zipcode = '20500'
    )

    db.session.add(order3)
    db.session.commit()

def undo_orders():
    db.session.execute('TRUNCATE orders RESTART IDENTITY CASCADE;')
    db.session.commit()
