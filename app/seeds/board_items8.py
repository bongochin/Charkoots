from app.models import db, Board_Item8

def seed_board_items8():

  # Fruits ===============================================

    fruit1 = Board_Item8(
        item_type='Fruits',
        item_name='Mission Figs',
        item_image='https://www.clipartkey.com/mpngs/m/243-2437958_fig-png-image-background-turkey-figs.png',
        item_description="If you know of the myth, we suggest not to mention it to your party... Until everyone had one, at least",
        boldness=2.8,
        sharpness=1.2,
        saltiness=0.1,
        spiciness=0.1,
        sweetness=3.2,
    )

    db.session.add(fruit1)
    db.session.commit()

    # =====================================================

    fruit2 = Board_Item8(
        item_type='Fruits',
        item_name='Champagne Grapes',
        item_image='https://i.pinimg.com/originals/7a/38/e7/7a38e7207389f22a6a27f4e095807792.png',
        item_description="Perfect for any occassions and celebrations, big and small",
        boldness=0.3,
        sharpness=4.1,
        saltiness=0.1,
        spiciness=0.1,
        sweetness=3.6,
    )

    db.session.add(fruit2)
    db.session.commit()

    # =====================================================

    fruit3 = Board_Item8(
        item_type='Fruits',
        item_name='Wild Berries',
        item_image='https://freepngimg.com/thumb/berries/28851-1-berries-thumb.png',
        item_description="If we're honest, there's nothing wild about them. They're just berries",
        boldness=0.9,
        sharpness=4.1,
        saltiness=0.1,
        spiciness=0.1,
        sweetness=2.7,
    )

    db.session.add(fruit3)
    db.session.commit()

    # =====================================================

    fruit4 = Board_Item8(
        item_type='Fruits',
        item_name='Luxardo Maraschino Cherries',
        item_image='https://applejack.com/site/images/Luxardo-Maraschino-Cherries_1.png',
        item_description="Grab a few of these before plating and fix yourself a mean old fashioned",
        boldness=2.3,
        sharpness=2.2,
        saltiness=0.1,
        spiciness=0.1,
        sweetness=3.8,
    )

    db.session.add(fruit4)
    db.session.commit()

    # =====================================================

    fruit5 = Board_Item8(
        item_type='Fruits',
        item_name='Dried Apricots',
        item_image='https://www.nutfruit.org/images/consumer-fruit/1570535024-apricot.png',
        item_description="a delightful flavor full of tropical sunshine",
        boldness=3.1,
        sharpness=1.2,
        saltiness=0.6,
        spiciness=0.1,
        sweetness=3.7,
    )

    db.session.add(fruit5)
    db.session.commit()

    # =====================================================

    fruit6 = Board_Item8(
        item_type='Fruits',
        item_name='Mixed Olives',
        item_image='https://cdn.shopify.com/s/files/1/1529/5227/products/TCS_Provision-spanishOlives_1024x684_aebe5cf8-d5bd-410f-8562-defba611cc7e_1024x1024.png?v=1542757765',
        item_description="A grocer’s choice. It's pitted, so no one has to call the dentist (because they are not real doctors)",
        boldness=3.4,
        sharpness=1.7,
        saltiness=2.4,
        spiciness=0.3,
        sweetness=1.6,
    )

    db.session.add(fruit6)
    db.session.commit()

    # =====================================================

    fruit7 = Board_Item8(
        item_type='Fruits',
        item_name='Cornichons',
        item_image='http://assets.stickpng.com/images/5eafeccaf7f4540004b715e8.png',
        item_description='Stop calling it "those tiny pickled cucumber thingies". we\'re going to quiz you on this',
        boldness=0.2,
        sharpness=4.1,
        saltiness=3.2,
        spiciness=0.8,
        sweetness=3.6,
    )

    db.session.add(fruit7)
    db.session.commit()

    # =====================================================

    fruit8 = Board_Item8(
        item_type='Fruits',
        item_name='Artichoke Hearts',
        item_image='https://lotsa.com/wp-content/uploads/2018/02/artichoke-hearts-300x297.png',
        item_description="A light, punchy palate cleanser strong enough to cut through the fat from meat and cheese",
        boldness=1.6,
        sharpness=3.5,
        saltiness=1.3,
        spiciness=0.6,
        sweetness=1.7,
    )

    db.session.add(fruit8)
    db.session.commit()

    # =====================================================

def undo_board_items8():
    db.session.execute('TRUNCATE board_items RESTART IDENTITY CASCADE;')
    db.session.commit()
