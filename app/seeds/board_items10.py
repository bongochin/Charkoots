from app.models import db, Board_Item10

def seed_board_items10():

  # Spread ===============================================

    spread1 = Board_Item10(
        item_type='Spreads',
        item_name='Spicy Honey',
        item_image='http://pngimg.com/uploads/honey/honey_PNG86308.png',
        item_description="A rich, glossy and sweet glue with a an interesting, lively kick",
        boldness=3.7,
        sharpness=1.1,
        saltiness=0.1,
        spiciness=3.4,
        sweetness=4.2,
    )

    db.session.add(spread1)
    db.session.commit()

    # =====================================================

    spread2 = Board_Item10(
        item_type='Spreads',
        item_name='Truffle Olive Oil',
        item_image='https://www.laquintaoliveoilcompany.com/wp-content/uploads/2018/03/WhitetruffleOO.png',
        item_description="It's amazing how a few drops of these on everything elevates the flavor to the next level",
        boldness=4.8,
        sharpness=0.6,
        saltiness=0.4,
        spiciness=0.4,
        sweetness=1.6,
    )

    db.session.add(spread2)
    db.session.commit()

    # =====================================================

    spread3 = Board_Item10(
        item_type='Spreads',
        item_name='Orange Marmalade',
        item_image='https://img.favpng.com/18/21/13/jam-bonne-maman-canning-strawberry-marmalade-png-favpng-7YLkW39FtkdkTsPWGPzj4ge1u.jpg',
        item_description="A bit breakfasty, but trust its bright, bitter and sweet awesomeness",
        boldness=2.8,
        sharpness=3.1,
        saltiness=1.1,
        spiciness=0.9,
        sweetness=4.2,
    )

    db.session.add(spread3)
    db.session.commit()

    # =====================================================

    spread4 = Board_Item10(
        item_type='Spreads',
        item_name='Fig Jam',
        item_image='https://lh3.googleusercontent.com/proxy/EP2ch_2qaMHG8UJfxl7RZdcGBUB_UkNEEYLSO201E74IGkZCaE0bH9Akw9d-G9sUTyTFMRZ-mttUIuBSkDEkvcqehFrD2OMR9A',
        item_description="A charchuterie classic, nice blend of savory and sweet",
        boldness=3.2,
        sharpness=1.7,
        saltiness=3.6,
        spiciness=0.4,
        sweetness=3.9,
    )

    db.session.add(spread4)
    db.session.commit()

    # =====================================================

    spread5 = Board_Item10(
        item_type='Spreads',
        item_name='Sun-dried Tomato Puree',
        item_image='https://cdn.imgbin.com/1/8/9/imgbin-sun-dried-tomato-pasta-p-t-tomato-paste-tomato-6H4U2UBepAcTjUZmGVNpFGhgi.jpg',
        item_description="A touch of this on any greasy meats and/or cheeses will transform your ensemble into very Italian hors d'oeuvres",
        boldness=3.2,
        sharpness=3.1,
        saltiness=3.2,
        spiciness=2.7,
        sweetness=2.2,
    )

    db.session.add(spread5)
    db.session.commit()

    # =====================================================

    spread6 = Board_Item10(
        item_type='Spreads',
        item_name='Dijon Mustard',
        item_image='https://w7.pngwing.com/pngs/962/990/png-transparent-french-cuisine-maille-dijon-mustard-dijon-mustard-mustard-oil-seasoning-vinegar-mustard-oil.png',
        item_description="Mustard spiciness is the perfect way to bring orders back to your board, without overpowering richness",
        boldness=2.7,
        sharpness=4.1,
        saltiness=1.8,
        spiciness=4.4,
        sweetness=3.2,
    )

    db.session.add(spread6)
    db.session.commit()

    # =====================================================

    spread7 = Board_Item10(
        item_type='Spreads',
        item_name='Caramelized Onion Jam',
        item_image='https://cdn.shopify.com/s/files/1/0299/8150/7716/products/0owJjXT0RxCXizu7qzCt_Untitled_design_-_2020-05-27T150633.839_2048x.png?v=1591287538',
        item_description="A quintessential sweet and savory jam with rich vegetable tastes",
        boldness=3.7,
        sharpness=2.7,
        saltiness=3.8,
        spiciness=1.9,
        sweetness=3.8,
    )

    db.session.add(spread7)
    db.session.commit()

    # =====================================================

    spread8 = Board_Item10(
        item_type='Spreads',
        item_name='Guacamole',
        item_image='https://banner2.cleanpng.com/20190618/ajp/kisspng-guacamole-salsa-mexican-cuisine-chipotle-mexican-g-chipotle-avocado-5d08679cb62091.449091281560831900746.jpg',
        item_description="Least traditional, but it's all about emulsion. Perfect choice to explore new flavor horizon",
        boldness=4.1,
        sharpness=3.1,
        saltiness=3.1,
        spiciness=3.7,
        sweetness=2.1,
    )

    db.session.add(spread8)
    db.session.commit()

    # =====================================================

def undo_board_items10():
    db.session.execute('TRUNCATE board_items RESTART IDENTITY CASCADE;')
    db.session.commit()
