from app.models import db, Board

# Adds a demo user, you can add other users here if you want
def seed_boards():
    board1 = Board(
        board_name='I Warned Ya!',
        board_description="It's packed with flavor, heat and spices that I doubt you're able to handle it. Wait, are you sure? Well, don't tell me I didn't warned ya!",
        board_cost=29.99,
        meat1=1,
        meat2=2,
        meat3=3,
        cheese1=9,
        cheese2=10,
        cheese3=11,
        cracker=17,
        fruit=25,
        nut=33,
        spread=41
    )

    db.session.add(board1)
    db.session.commit()

def undo_boards():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
