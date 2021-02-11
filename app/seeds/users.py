from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(
        username='demo',
        email='demo@aa.io',
        password='password',
        first_name='Demo',
        last_name='User',
        address1='1600 Pennsylvania Avenue',
        address2='West Wing',
        city='Washington',
        state='DC',
        zipcode='20500'
    )

    db.session.add(demo)
    db.session.commit()

    # =====================================================

    mace = User(
        username='macewindu',
        email='mace_windu@charkoots.com',
        password='iHaveAPurpleLightSaber',
        first_name='Mace',
        last_name='Windu',
        address1='1600 Temple Rd',
        address2='Suite 66',
        city='Coruscant',
        state='NJ',
        zipcode='07913'
    )

    db.session.add(mace)
    db.session.commit()

def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
