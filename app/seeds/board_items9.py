from app.models import db, Board_Item9

def seed_board_items9():

  # Nuts =================================================

    nut1 = Board_Item9(
        item_type='Nuts',
        item_name='Marcona Almonds',
        item_image='https://woodlandfoods.com/img/WF_Images/N44-nuts-marcona-almonds-main.jpg',
        item_description="Trust us, this is the almond you want; nuttier, perfectly seasoned crunch without dry almond aftertaste",
        boldness=4.1,
        sharpness=0.9,
        saltiness=3.6,
        spiciness=0.1,
        sweetness=2.8,
    )

    db.session.add(nut1)
    db.session.commit()

    # =====================================================

    nut2 = Board_Item9(
        item_type='Nuts',
        item_name='Praline Pecans',
        item_image='http://cdn.shopify.com/s/files/1/2507/9278/products/WataNut-PralinePecans-bowl_600x.png?v=1510236928',
        item_description="People may (by may we mean always) argue about the pronunciation, but we can all agree that this is delicious",
        boldness=4.1,
        sharpness=0.9,
        saltiness=1.3,
        spiciness=0.1,
        sweetness=4.0,
    )

    db.session.add(nut2)
    db.session.commit()

    # =====================================================

    nut3 = Board_Item9(
        item_type='Nuts',
        item_name='Pistachios',
        item_image='http://assets.stickpng.com/images/580b57fcd9996e24bc43c1d6.png',
        item_description="Pro tip: wedge in a loose shell between the cracks and use it as a crowbar. Let the Physics do the work",
        boldness=3.7,
        sharpness=1.2,
        saltiness=3.9,
        spiciness=0.1,
        sweetness=1.7,
    )

    db.session.add(nut3)
    db.session.commit()

    # =====================================================

    nut4 = Board_Item9(
        item_type='Nuts',
        item_name='Hazelnuts',
        item_image='https://e1.pngegg.com/pngimages/476/408/png-clipart-autumn-hazelnut.png',
        item_description="An irresistably toasty goodness with an intoxicating fragrance",
        boldness=4.6,
        sharpness=0.2,
        saltiness=0.4,
        spiciness=0.1,
        sweetness=1.6,
    )

    db.session.add(nut4)
    db.session.commit()

    # =====================================================

    nut5 = Board_Item9(
        item_type='Nuts',
        item_name='Macadamia Nuts',
        item_image='https://img.favpng.com/25/4/10/macadamia-oil-macadamia-nut-tree-nut-allergy-png-favpng-NtD4Qsn3au4gZX7uZg5A2E0wk.jpg',
        item_description="Imported exclusively from Hawaiian airport's duty-free outlet where your newlywed friend bought all of her souvinir gifts for her friends",
        boldness=4.2,
        sharpness=0.9,
        saltiness=1.4,
        spiciness=0.1,
        sweetness=3.6,
    )

    db.session.add(nut5)
    db.session.commit()

    # =====================================================

    nut6 = Board_Item9(
        item_type='Nuts',
        item_name='Cashews',
        item_image='https://lh3.googleusercontent.com/proxy/9-PBEwbmmRp9oRyAfOxkALXmzZUaSWOZfMKdXQSNWAohlrT9J2renJZue7wNzhY0B503ILL9WM8JFjVfCtgikcy_PDgWhUsZ6duyXWthKH3rtaGR_pkuOIZ-hmb0KVDYQWvjRtY',
        item_description="For those who were forced to eat leftovers from a mixed-nut can, who ended up liking it",
        boldness=3.9,
        sharpness=0.9,
        saltiness=3.7,
        spiciness=0.1,
        sweetness=0.8,
    )

    db.session.add(nut6)
    db.session.commit()

    # =====================================================

    nut7 = Board_Item9(
        item_type='Nuts',
        item_name='Chocolate Peanuts',
        item_image='https://w7.pngwing.com/pngs/57/57/png-transparent-chocolate-coated-peanut-white-chocolate-salty-liquorice-macaroon-chocolate-food-peanut-superfood.png',
        item_description="Please don't order this if you have a peanut allergy, pretty please",
        boldness=3.7,
        sharpness=0.9,
        saltiness=1.6,
        spiciness=0.1,
        sweetness=3.7,
    )

    db.session.add(nut7)
    db.session.commit()

    # =====================================================

    nut8 = Board_Item9(
        item_type='Nuts',
        item_name='Yogurt Almonds',
        item_image='https://www.nutstop.com/wp-content/uploads/2015/06/Yogurt-Almonds-Nutstop.jpg',
        item_description="There's a reason why trail mix has these guys in it...",
        boldness=3.6,
        sharpness=1.2,
        saltiness=1.6,
        spiciness=0.1,
        sweetness=3.8,
    )

    db.session.add(nut8)
    db.session.commit()

    # =====================================================

def undo_board_items9():
    db.session.execute('TRUNCATE board_items RESTART IDENTITY CASCADE;')
    db.session.commit()
