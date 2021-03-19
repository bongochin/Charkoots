from app.models import db, Board

# Adds a demo user, you can add other users here if you want
def seed_boards():
    board1 = Board(
        board_name='Rat Pack',
        board_description="It's what this generation calls it a GOAT. Best consumed with your grandapa to discuss how 'grand' things were back then.",
        board_cost=29.99,
        meat1=1,
        meat2=3,
        meat3=6,
        cheese1=7,
        cheese2=2,
        cheese3=4,
        cracker=5,
        fruit=2,
        nut=1,
        spread=2
    )

    db.session.add(board1)
    db.session.commit()

    board2 = Board(
        board_name='Mama Maglione',
        board_description="We don't know who she is, but wouldn't someone named like her know some good eats?",
        board_cost=29.99,
        meat1=5,
        meat2=8,
        meat3=1,
        cheese1=3,
        cheese2=6,
        cheese3=8,
        cracker=4,
        fruit=1,
        nut=4,
        spread=3
    )

    db.session.add(board2)
    db.session.commit()

    board3 = Board(
        board_name='I Need a Doctor',
        board_description="Please consult with your primary care if your heart can handle this. Just kidding, it (probably) won't kill ya.",
        board_cost=29.99,
        meat1=3,
        meat2=4,
        meat3=7,
        cheese1=5,
        cheese2=1,
        cheese3=4,
        cracker=8,
        fruit=8,
        nut=7,
        spread=7
    )

    db.session.add(board3)
    db.session.commit()

    board4 = Board(
        board_name='The Number 4',
        board_description="Time-tested, fail-proof combination that always seems to be the best seller at every deli.",
        board_cost=29.99,
        meat1=2,
        meat2=4,
        meat3=6,
        cheese1=2,
        cheese2=4,
        cheese3=7,
        cracker=1,
        fruit=7,
        nut=8,
        spread=5
    )

    db.session.add(board4)
    db.session.commit()

    board5 = Board(
        board_name='The Magnum',
        board_description="This board is so good that you might as well go for a magnum bottle, just for yourself. Disclaimer: We only pair you with one regular-size bottles",
        board_cost=29.99,
        meat1=8,
        meat2=7,
        meat3=3,
        cheese1=1,
        cheese2=3,
        cheese3=7,
        cracker=7,
        fruit=4,
        nut=4,
        spread=6
    )

    db.session.add(board5)
    db.session.commit()

    board6 = Board(
        board_name='I Warned Ya!',
        board_description="It's packed with flavor, heat and spices that I doubt you'd able to handle it. Wait, are you sure? Well, don't tell me I didn't warned ya!",
        board_cost=29.99,
        meat1=7,
        meat2=6,
        meat3=4,
        cheese1=3,
        cheese2=4,
        cheese3=2,
        cracker=4,
        fruit=6,
        nut=3,
        spread=1
    )

    db.session.add(board6)
    db.session.commit()

def undo_boards():
    db.session.execute('TRUNCATE boards RESTART IDENTITY CASCADE;')
    db.session.commit()
