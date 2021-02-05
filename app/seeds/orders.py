from werkzeug.security import generate_password_hash
from app.models import db, Order

# Adds a demo user, you can add other users here if you want
def seed_orders():

    demo_order1 = Order(
        board_id=1,
        wine_id=1,
        shipping_address1 = '1600 Pennsylvania Avenue',
        shipping_address2 = 'West Wing',
        shipping_city = 'Washington',
        shipping_state = 'DC',
        shipping_zipcode = '20500'
    )

    db.session.add(demo_order1)
    db.session.commit()

    # =====================================================

    demo_order2 = Order(
        board_id=2,
        wine_id=2,
        shipping_address1 = '1600 Pennsylvania Avenue',
        shipping_address2 = 'West Wing',
        shipping_city = 'Washington',
        shipping_state = 'DC',
        shipping_zipcode = '20500'
    )

    db.session.add(demo_order2)
    db.session.commit()

    # =====================================================

    demo_order3 = Order(
        board_id=1,
        wine_id=2,
        shipping_address1 = '1600 Pennsylvania Avenue',
        shipping_address2 = 'West Wing',
        shipping_city = 'Washington',
        shipping_state = 'DC',
        shipping_zipcode = '20500'
    )

    db.session.add(demo_order3)
    db.session.commit()

def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
