from app.models import db, Board

# Adds a demo user, you can add other users here if you want
def seed_boards():

    i_need_a_doctor = Board(
        board_name='I Need a Doctor',
        board_description="Just kidding, it (probably) won't kill ya.",
        board_cost=29.99,
        meat1=1,
        meat2='Jamon Iberico',
        meat3='Mortadella',
        cheese1='Brie',
        cheese2='Camembert',
        cheese3='Gouda',
        cracker='Croccatini',
        fruit='Apricot',
        nut='Almond',
        spread='Olive Oil'
    )

    db.session.add(i_need_a_doctor)
    db.session.commit()

    # =====================================================

    the_number_4 = Board(
        board_name='The #4',
        board_description="A time-tested, fail-proof combination that you always seem to find at every deli you go to, but better.",
        board_cost=29.99,
        meat1='Prosciutto',
        meat2='Soppressata',
        meat3='Finnochiona',
        cheese1='Gruyere',
        cheese2='Pecorino',
        cheese3='Manchego',
        cracker='Breadsticks',
        fruit='Olives',
        nut='Pecan',
        spread='Mustard'
    )

    db.session.add(the_number_4)
    db.session.commit()

    # =====================================================

    mama_maglione = Board(
        board_name='Mama Maglione',
        board_description="We don't know who she is, but doesn't she sound like she knows her stuff? You know, the Italian stuff.",
        board_cost=29.99,
        meat1='Soppressata',
        meat2='Pepperoni',
        meat3='Finnochiona',
        cheese1='Brie',
        cheese2='Gouda',
        cheese3='Cheddar',
        cracker='Multigrain',
        fruit='Figs',
        nut='Pistachio',
        spread='Truffle Oil'
    )

    db.session.add(mama_maglione)
    db.session.commit()

    # =====================================================

    rat_pack = Board(
        board_name='Rat Pack',
        board_description="It's what this generation calls it a GOAT. Best consumed with your grandapa to discuss how 'grand' everything were back then.",
        board_cost=29.99,
        meat1='Soppressata',
        meat2='Pepperoni',
        meat3='Finnochiona',
        cheese1='Brie',
        cheese2='Gouda',
        cheese3='Cheddar',
        cracker='Multigrain',
        fruit='Figs',
        nut='Pistachio',
        spread='Truffle Oil'
    )

    db.session.add(rat_pack)
    db.session.commit()

    # =====================================================

    the_magnum = Board(
        board_name='The Magnum',
        board_description="This board is so good that you might as well go for a magnum bottle, just for yourself. Disclaimer: We only pair you with one regular bottle",
        board_cost=29.99,
        meat1='Soppressata',
        meat2='Pepperoni',
        meat3='Finnochiona',
        cheese1='Brie',
        cheese2='Gouda',
        cheese3='Cheddar',
        cracker='Multigrain',
        fruit='Figs',
        nut='Pistachio',
        spread='Truffle Oil'
    )

    db.session.add(the_magnum)
    db.session.commit()

    # =====================================================

    i_warned_ya = Board(
        board_name='I Warned Ya!',
        board_description="It's packed with flavor, heat and spices that I doubt you're able to handle it. Wait, are you sure? Well, don't tell me I didn't warned ya!",
        board_cost=29.99,
        meat1='Soppressata',
        meat2='Pepperoni',
        meat3='Finnochiona',
        cheese1='Brie',
        cheese2='Gouda',
        cheese3='Cheddar',
        cracker='Multigrain',
        fruit='Figs',
        nut='Pistachio',
        spread='Truffle Oil'
    )

    db.session.add(i_warned_ya)
    db.session.commit()

    # =====================================================


def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
