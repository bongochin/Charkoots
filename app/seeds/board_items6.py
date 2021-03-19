from app.models import db, Board_Item6

def seed_board_items6():

  # Cheeses ==============================================

    cheese1 = Board_Item6(
        item_type='Cheeses',
        item_name='Parmigiano Reggiano',
        item_image='https://img.favpng.com/10/22/11/parmigiano-reggiano-gruy-re-cheese-grana-padano-montasio-pecorino-romano-png-favpng-c8stznyLxnZfbg8yVuWFjFRa2.jpg',
        item_description='A fail-proof classic that we all love and enjoy; salty, nutty, waxy block of heaven',
        boldness=2.4,
        sharpness=3.1,
        saltiness=4.1,
        spiciness=0.9,
        sweetness=2.6,
    )

    db.session.add(cheese1)
    db.session.commit()

    # =====================================================

    cheese2 = Board_Item6(
        item_type='Cheeses',
        item_name='Manchego',
        item_image='https://w7.pngwing.com/pngs/971/470/png-transparent-gruyere-cheese-manchego-cheddar-cheese-raclette-goat-goat-food-animals-cheese.png',
        item_description='A tangy sour cream flavor with cheesecake sweetness that has aged just enough to have caramel notes',
        boldness=2.3,
        sharpness=4.1,
        saltiness=2.8,
        spiciness=0.9,
        sweetness=3.1,
    )

    db.session.add(cheese2)
    db.session.commit()

    # =====================================================

    cheese3 = Board_Item6(
        item_type='Cheeses',
        item_name='Robiola',
        item_image='https://nonsolobuono.it/wp-content/uploads/2018/09/robiola.png',
        item_description="Perfect blend of cow's, goat's and sheep milk. Smells like Funkytown but surprisingly mild and sweet",
        boldness=3.7,
        sharpness=3.1,
        saltiness=3.6,
        spiciness=0.3,
        sweetness=3.4,
    )

    db.session.add(cheese3)
    db.session.commit()

    # =====================================================

    cheese4 = Board_Item6(
        item_type='Cheeses',
        item_name='Gouda',
        item_image='https://p7.hiclipart.com/preview/264/1022/498/gruyxe8re-cheese-gouda-cheese-emmental-cheese-swiss-cheese-fresh-cheese.jpg',
        item_description="Teacher's pet of cheeses; It's sharp but creamy, salty but sweet",
        boldness=3.7,
        sharpness=3.7,
        saltiness=3.4,
        spiciness=0.3,
        sweetness=3.4,
    )

    db.session.add(cheese4)
    db.session.commit()

    # =====================================================

    cheese5 = Board_Item6(
        item_type='Cheeses',
        item_name='Vermont Cheddar',
        item_image='https://www.kindpng.com/picc/m/196-1962393_designs-slice-of-cheddar-cheese-photo-cheese-hd.png',
        item_description="There's a reason why people think of their cheese before Joe Biden when we talk about Vermont",
        boldness=3.9,
        sharpness=2.8,
        saltiness=4.1,
        spiciness=0.2,
        sweetness=2.7,
    )

    db.session.add(cheese5)
    db.session.commit()

    # =====================================================

    cheese6 = Board_Item6(
        item_type='Cheeses',
        item_name='Blueberry Goat Cheese',
        item_image='https://www.supermarketperimeter.com/ext/resources/0520-Montchevre1.png?1589985503',
        item_description='Creamy and flavorful with an impressive outfit that just looks makes sense',
        boldness=2.9,
        sharpness=4.1,
        saltiness=2.8,
        spiciness=0.3,
        sweetness=4.1,
    )

    db.session.add(cheese6)
    db.session.commit()

    # =====================================================

    cheese7 = Board_Item6(
        item_type='Cheeses',
        item_name='Triple Cream Brie',
        item_image='http://atlas-content-cdn.pixelsquid.com/stock-images/brie-mdaZznC-600.jpg',
        item_description='A quintessential crowd-pleaser; soft, buttery, luxurious, melt-in-your-mouth deliciousness',
        boldness=4.5,
        sharpness=2.4,
        saltiness=3.9,
        spiciness=0.2,
        sweetness=3.3,
    )

    db.session.add(cheese7)
    db.session.commit()

    # =====================================================

    cheese8 = Board_Item6(
        item_type='Cheeses',
        item_name='Gorgonzola Dolce',
        item_image='https://cdn-endpoint-website.azureedge.net/uploads/PhotoModel/8901/image/cheese4c.gallery.png?t=1437610412',
        item_description="Don't be intimidated by it's funky looks. A delicatly mild, sweet and creamy cheese that pairs perfectly with honey",
        boldness=3.6,
        sharpness=3.4,
        saltiness=3.0,
        spiciness=0.6,
        sweetness=3.3,
    )

    db.session.add(cheese8)
    db.session.commit()

def undo_board_items6():
    db.session.execute('TRUNCATE board_items RESTART IDENTITY CASCADE;')
    db.session.commit()
