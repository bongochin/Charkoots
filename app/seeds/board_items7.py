from app.models import db, Board_Item7

def seed_board_items7():

  # Crackers =============================================

    cracker1 = Board_Item7(
        item_type='Crackers',
        item_name='Toasted Baguettes',
        item_image='https://png.pngtree.com/png-vector/20201110/ourlarge/pngtree-slice-of-healthy-baguette-png-image_2402376.jpg',
        item_description="It's a Paul Rudd of breads; everybody loves it, and gets along with pretty much everything",
        boldness=0.4,
        sharpness=0.4,
        saltiness=1.9,
        spiciness=0.1,
        sweetness=1.2,
    )

    db.session.add(cracker1)
    db.session.commit()

    # =====================================================

    cracker2 = Board_Item7(
        item_type='Crackers',
        item_name='Multi-Seed',
        item_image='http://www.biobites.com/wp-content/uploads/2016/08/italian-crackers.png',
        item_description="Extra nutty, crunchy, and flavorful base to harmonize your ingredients. Be sure to check your teeth constantly",
        boldness=1.5,
        sharpness=0.4,
        saltiness=0.9,
        spiciness=0.1,
        sweetness=1.9,
    )

    db.session.add(cracker2)
    db.session.commit()

    # =====================================================

    cracker3 = Board_Item7(
        item_type='Crackers',
        item_name='Whole Wheat',
        item_image='https://previews.123rf.com/images/carla720/carla7201612/carla720161200134/67979599-some-whole-wheat-crackers-on-white-background.jpg',
        item_description="Rich and sweet way to balance out the savory meats and cheeses",
        boldness=1.2,
        sharpness=0.4,
        saltiness=1.1,
        spiciness=0.1,
        sweetness=2.2,
    )

    db.session.add(cracker3)
    db.session.commit()

    # =====================================================

    cracker4 = Board_Item7(
        item_type='Crackers',
        item_name='Sourdough Flatbreads',
        item_image='https://www.nairns-oatcakes.com/sites/default/files/styles/max_1300x1300/public/2019-09/canadian-products-packaging-flatbread-rosemary-sea-salt-1010px-wide.png?itok=Sdr3M5Zf',
        item_description="With delightful hints of rosemary and sea salt to brighten the flavor and add complexity in every bite",
        boldness=1.4,
        sharpness=1.2,
        saltiness=2.1,
        spiciness=0.5,
        sweetness=0.8,
    )

    db.session.add(cracker4)
    db.session.commit()

    # =====================================================

    cracker5 = Board_Item7(
        item_type='Crackers',
        item_name='Croccantini',
        item_image='https://lovewithfood.com/images/marketitemphotos/0000/4909/9ed22573d7_largest.jpg',
        item_description="A de facto cracker built to handle the toughest loads of meats and cheeses",
        boldness=0.4,
        sharpness=0.4,
        saltiness=0.9,
        spiciness=0.1,
        sweetness=0.2,
    )

    db.session.add(cracker5)
    db.session.commit()

    # =====================================================

    cracker6 = Board_Item7(
        item_type='Crackers',
        item_name='Gluten-Free',
        item_image='https://png.pngtree.com/png-vector/20201110/ourlarge/pngtree-slice-of-healthy-baguette-png-image_2402376.jpg',
        item_description="Because we remember and care about you, unlike your boyfriend",
        boldness=0.4,
        sharpness=0.4,
        saltiness=1.9,
        spiciness=0.1,
        sweetness=1.2,
    )

    db.session.add(cracker6)
    db.session.commit()

    # =====================================================

    cracker7 = Board_Item7(
        item_type='Crackers',
        item_name='Rosemary Raisin Pecan Crisps',
        item_image='https://png.pngtree.com/png-vector/20201110/ourlarge/pngtree-slice-of-healthy-baguette-png-image_2402376.jpg',
        item_description="This one's got some flavor on it's own; best enjoyed with milder and softer cheeses",
        boldness=2.1,
        sharpness=1.2,
        saltiness=1.9,
        spiciness=1.1,
        sweetness=2.6,
    )

    db.session.add(cracker7)
    db.session.commit()

    # =====================================================

    cracker8 = Board_Item7(
        item_type='Crackers',
        item_name='Ritz',
        item_image='https://www.pngkey.com/png/detail/371-3719312_ritz-crackers.png',
        item_description="This is a judgement-free zone, but we're going to secretly assume that you peaked at high school",
        boldness=3.1,
        sharpness=1.7,
        saltiness=3.2,
        spiciness=0.1,
        sweetness=1.4,
    )

    db.session.add(cracker8)
    db.session.commit()

    # =====================================================

def undo_board_items7():
    db.session.execute('TRUNCATE board_items RESTART IDENTITY CASCADE;')
    db.session.commit()
