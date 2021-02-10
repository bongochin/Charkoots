from app.models import db, Board_Item

def seed_board_items():

  # Meats ================================================

    meat1 = Board_Item(
        item_type='Meats',
        item_name='Prosciutto di San Daniele',
        item_image='https://img.favpng.com/11/0/9/prosciutto-ham-italian-cuisine-antipasto-food-png-favpng-EXS1dw6r4ghT5fGLBQWnzFypm.jpg',
        item_description='Not your average Prosciutto; Salty and oily, of course, but with that irresistable tangy, crudo flavors',
        boldness='4.4',
        sharpness='2.4',
        saltiness='4.2',
        spiciness='0.9',
        sweetness='1.7',
    )

    db.session.add(meat1)
    db.session.commit()

    # =====================================================

    meat2 = Board_Item(
        item_type='Meats',
        item_name='Mortadella',
        item_image='https://img.favpng.com/17/19/7/york-ham-pizza-charcuterie-mortadella-png-favpng-7zh0sX5m25jC5eqEVqRzEDJuz.jpg',
        item_description="A level up from your lunchbox Bologna, but I bet you look at old facebook albums in quarterly basis.",
        boldness='4.1',
        sharpness='2.1',
        saltiness='3.8',
        spiciness='0.4',
        sweetness='2.0',
    )

    db.session.add(meat2)
    db.session.commit()

    # =====================================================

    meat3 = Board_Item(
        item_type='Meats',
        item_name='Jamon Iberico',
        item_image='https://pngimg.com/uploads/jamon/jamon_PNG41.png',
        item_description="Deliciously marbled ham of very special Spanish black bigs. I heard they fly, or something.",
        boldness='4.4',
        sharpness='2.7',
        saltiness='3.8',
        spiciness='1.2',
        sweetness='1.3',
    )

    db.session.add(meat3)
    db.session.commit()

    # =====================================================

    meat4 = Board_Item(
        item_type='Meats',
        item_name='Soppressata',
        item_image='https://w7.pngwing.com/pngs/319/97/png-transparent-salami-soppressata-bresaola-blood-sausage-mettwurst-meat-food-beef-animal-source-foods-thumbnail.png',
        item_description="A type of Salami with a peppery, garlicy twist. Just enough heat to cut through the fat.",
        boldness='4.2',
        sharpness='3.7',
        saltiness='3.5',
        spiciness='2.8',
        sweetness='2.7',
    )

    db.session.add(meat4)
    db.session.commit()

    # =====================================================

    meat5 = Board_Item(
        item_type='Meats',
        item_name='Bresaola',
        item_image='https://busseto.com/assets/images/products/bresaola/product-example.png',
        item_description="A musky, leaner cut made from eye of top rounds. a Jab of funk, with a delicate after-taste",
        boldness='2.6',
        sharpness='3.6',
        saltiness='2.9',
        spiciness='0.8',
        sweetness='1.6',
    )

    db.session.add(meat5)
    db.session.commit()

    # =====================================================

    meat6 = Board_Item(
        item_type='Meats',
        item_name='Capocollo',
        item_image='https://lh3.googleusercontent.com/proxy/HLr510BmblEiwgfOwPOwNTPX7o7FJO5beTyawifnhJzV-83VY_kJZdQevh0sTv4cgt7YwjwNmggKuCVeoNlYHJ-yTG74g8XWIQ_5LpGEi5nMRLVSsUil',
        item_description='Also known as "Coppa"; A dry-cured, spice-rubbed pork neck with a generous marbeling and texture',
        boldness='4.6',
        sharpness='3.1',
        saltiness='3.3',
        spiciness='3.2',
        sweetness='1.4',
    )

    db.session.add(meat6)
    db.session.commit()

    # =====================================================

    meat7 = Board_Item(
        item_type='Meats',
        item_name='Spanish Chorizo',
        item_image='https://img.pngio.com/halal-spanish-cuisine-chorizo-ham-salami-ham-chorizo-png-900_500.png',
        item_description="The spiciest and smokiest player from our roster. A bit less greasy and sweeter than it's Mexican cousin",
        boldness='4.1',
        sharpness='2.7',
        saltiness='3.8',
        spiciness='4.5',
        sweetness='3.1',
    )

    db.session.add(meat7)
    db.session.commit()

    # =====================================================

    meat8 = Board_Item(
        item_type='Meats',
        item_name='Speck',
        item_image='https://www.veroni.it/wp-content/uploads/2020/02/Fette-Speck2.jpg',
        item_description="Cured meat equivalent of dry-humored marathon runner friend who insists on joining her on 5K charity run",
        boldness='2.7',
        sharpness='2.9',
        saltiness='3.1',
        spiciness='0.7',
        sweetness='1.5',
    )

    db.session.add(meat8)
    db.session.commit()

  # Cheeses ==============================================

    cheese1 = Board_Item(
        item_type='Cheeses',
        item_name='Parmigiano Reggiano',
        item_image='https://img.favpng.com/10/22/11/parmigiano-reggiano-gruy-re-cheese-grana-padano-montasio-pecorino-romano-png-favpng-c8stznyLxnZfbg8yVuWFjFRa2.jpg',
        item_description='A fail-proof classic that we all love and enjoy; salty, nutty, waxy block of heaven',
        boldness='2.4',
        sharpness='3.1',
        saltiness='4.1',
        spiciness='0.9',
        sweetness='2.6',
    )

    db.session.add(cheese1)
    db.session.commit()

    # =====================================================

    cheese2 = Board_Item(
        item_type='Cheeses',
        item_name='Manchego',
        item_image='https://w7.pngwing.com/pngs/971/470/png-transparent-gruyere-cheese-manchego-cheddar-cheese-raclette-goat-goat-food-animals-cheese.png',
        item_description='A tangy sour cream flavor with cheesecake sweetness that has aged just enough to have caramel notes',
        boldness='2.3',
        sharpness='4.1',
        saltiness='2.8',
        spiciness='0.9',
        sweetness='3.1',
    )

    db.session.add(cheese2)
    db.session.commit()

    # =====================================================

    cheese3 = Board_Item(
        item_type='Cheeses',
        item_name='Robiola',
        item_image='https://nonsolobuono.it/wp-content/uploads/2018/09/robiola.png',
        item_description="Perfect blend of cow's, goat's and sheep milk. Smells like Funkytown but surprisingly mild and sweet",
        boldness='3.7',
        sharpness='3.1',
        saltiness='3.6',
        spiciness='0.3',
        sweetness='3.4',
    )

    db.session.add(cheese3)
    db.session.commit()

    # =====================================================

    cheese4 = Board_Item(
        item_type='Cheeses',
        item_name='Gouda',
        item_image='https://p7.hiclipart.com/preview/264/1022/498/gruyxe8re-cheese-gouda-cheese-emmental-cheese-swiss-cheese-fresh-cheese.jpg',
        item_description="Teacher's pet of cheeses; It's sharp but creamy, salty but sweet",
        boldness='3.7',
        sharpness='3.7',
        saltiness='3.4',
        spiciness='0.3',
        sweetness='3.4',
    )

    db.session.add(cheese4)
    db.session.commit()

    # =====================================================

    cheese5 = Board_Item(
        item_type='Cheeses',
        item_name='Vermont Cheddar',
        item_image='https://www.kindpng.com/picc/m/196-1962393_designs-slice-of-cheddar-cheese-photo-cheese-hd.png',
        item_description="There's a reason why people think of their cheese before Joe Biden when we talk about Vermont",
        boldness='3.9',
        sharpness='2.8',
        saltiness='4.1',
        spiciness='0.2',
        sweetness='2.7',
    )

    db.session.add(cheese5)
    db.session.commit()

    # =====================================================

    cheese6 = Board_Item(
        item_type='Cheeses',
        item_name='Blueberry Goat Cheese',
        item_image='https://www.supermarketperimeter.com/ext/resources/0520-Montchevre1.png?1589985503',
        item_description='Creamy and flavorful with an impressive outfit that just looks makes sense',
        boldness='2.9',
        sharpness='4.1',
        saltiness='2.8',
        spiciness='0.3',
        sweetness='4.1',
    )

    db.session.add(cheese6)
    db.session.commit()

    # =====================================================

    cheese7 = Board_Item(
        item_type='Cheeses',
        item_name='Triple Cream Brie',
        item_image='http://atlas-content-cdn.pixelsquid.com/stock-images/brie-mdaZznC-600.jpg',
        item_description='A quintessential crowd-pleaser; soft, buttery, luxurious, melt-in-your-mouth deliciousness',
        boldness='4.5',
        sharpness='2.4',
        saltiness='3.9',
        spiciness='0.2',
        sweetness='3.3',
    )

    db.session.add(cheese7)
    db.session.commit()

    # =====================================================

    cheese8 = Board_Item(
        item_type='Cheeses',
        item_name='Gorgonzola Dolce',
        item_image='https://cdn-endpoint-website.azureedge.net/uploads/PhotoModel/8901/image/cheese4c.gallery.png?t=1437610412',
        item_description="Don't be intimidated by it's funky looks. A delicatly mild, sweet and creamy cheese that pairs perfectly with honey",
        boldness='3.6',
        sharpness='3.4',
        saltiness='3.0',
        spiciness='0.6',
        sweetness='3.3',
    )

    db.session.add(cheese8)
    db.session.commit()

    # =====================================================
def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
