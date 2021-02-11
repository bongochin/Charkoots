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

  # Crackers =============================================

    cracker1 = Board_Item(
        item_type='Crackers',
        item_name='Toasted Baguettes',
        item_image='https://png.pngtree.com/png-vector/20201110/ourlarge/pngtree-slice-of-healthy-baguette-png-image_2402376.jpg',
        item_description="It's a Paul Rudd of breads; everybody loves it, and gets along with pretty much everything",
        boldness='0.4',
        sharpness='0.4',
        saltiness='1.9',
        spiciness='0.1',
        sweetness='1.2',
    )

    db.session.add(cracker1)
    db.session.commit()

    # =====================================================

    cracker2 = Board_Item(
        item_type='Crackers',
        item_name='Multi-Seed',
        item_image='http://www.biobites.com/wp-content/uploads/2016/08/italian-crackers.png',
        item_description="Extra nutty, crunchy, and flavorful base to harmonize your ingredients. Be sure to check your teeth constantly",
        boldness='1.5',
        sharpness='0.4',
        saltiness='0.9',
        spiciness='0.1',
        sweetness='1.9',
    )

    db.session.add(cracker2)
    db.session.commit()

    # =====================================================

    cracker3 = Board_Item(
        item_type='Crackers',
        item_name='Whole Wheat',
        item_image='https://previews.123rf.com/images/carla720/carla7201612/carla720161200134/67979599-some-whole-wheat-crackers-on-white-background.jpg',
        item_description="Rich and sweet way to balance out the savory meats and cheeses",
        boldness='1.2',
        sharpness='0.4',
        saltiness='1.1',
        spiciness='0.1',
        sweetness='2.2',
    )

    db.session.add(cracker3)
    db.session.commit()

    # =====================================================

    cracker4 = Board_Item(
        item_type='Crackers',
        item_name='Sourdough Flatbreads',
        item_image='https://www.nairns-oatcakes.com/sites/default/files/styles/max_1300x1300/public/2019-09/canadian-products-packaging-flatbread-rosemary-sea-salt-1010px-wide.png?itok=Sdr3M5Zf',
        item_description="With delightful hints of rosemary and sea salt to brighten the flavor and add complexity in every bite",
        boldness='1.4',
        sharpness='1.2',
        saltiness='2.1',
        spiciness='0.5',
        sweetness='0.8',
    )

    db.session.add(cracker4)
    db.session.commit()

    # =====================================================

    cracker5 = Board_Item(
        item_type='Crackers',
        item_name='Croccantini',
        item_image='https://lovewithfood.com/images/marketitemphotos/0000/4909/9ed22573d7_largest.jpg',
        item_description="A de facto cracker built to handle the toughest loads of meats and cheeses",
        boldness='0.4',
        sharpness='0.4',
        saltiness='0.9',
        spiciness='0.1',
        sweetness='0.2',
    )

    db.session.add(cracker5)
    db.session.commit()

    # =====================================================

    cracker6 = Board_Item(
        item_type='Crackers',
        item_name='Gluten-Free',
        item_image='https://png.pngtree.com/png-vector/20201110/ourlarge/pngtree-slice-of-healthy-baguette-png-image_2402376.jpg',
        item_description="Because we remember and care about you, unlike your boyfriend",
        boldness='0.4',
        sharpness='0.4',
        saltiness='1.9',
        spiciness='0.1',
        sweetness='1.2',
    )

    db.session.add(cracker6)
    db.session.commit()

    # =====================================================

    cracker7 = Board_Item(
        item_type='Crackers',
        item_name='Rosemary Raisin Pecan Crisps',
        item_image='https://png.pngtree.com/png-vector/20201110/ourlarge/pngtree-slice-of-healthy-baguette-png-image_2402376.jpg',
        item_description="This one's got some flavor on it's own; best enjoyed with milder and softer cheeses",
        boldness='2.1',
        sharpness='1.2',
        saltiness='1.9',
        spiciness='1.1',
        sweetness='2.6',
    )

    db.session.add(cracker7)
    db.session.commit()

    # =====================================================

    cracker8 = Board_Item(
        item_type='Crackers',
        item_name='Ritz',
        item_image='https://www.pngkey.com/png/detail/371-3719312_ritz-crackers.png',
        item_description="This is a judgement-free zone, but we're going to secretly assume that you peaked at high school",
        boldness='3.1',
        sharpness='1.7',
        saltiness='3.2',
        spiciness='0.1',
        sweetness='1.4',
    )

    db.session.add(cracker8)
    db.session.commit()

    # =====================================================

  # Fruits ===============================================

    fruit1 = Board_Item(
        item_type='Fruits',
        item_name='Mission Figs',
        item_image='https://www.clipartkey.com/mpngs/m/243-2437958_fig-png-image-background-turkey-figs.png',
        item_description="If you know of the myth, we suggest not to mention it to your party... Until everyone had one, at least",
        boldness='2.8',
        sharpness='1.2',
        saltiness='0.1',
        spiciness='0.1',
        sweetness='3.2',
    )

    db.session.add(fruit1)
    db.session.commit()

    # =====================================================

    fruit2 = Board_Item(
        item_type='Fruits',
        item_name='Champagne Grapes',
        item_image='https://i.pinimg.com/originals/7a/38/e7/7a38e7207389f22a6a27f4e095807792.png',
        item_description="Perfect for any occassions and celebrations, big and small",
        boldness='0.3',
        sharpness='4.1',
        saltiness='0.1',
        spiciness='0.1',
        sweetness='3.6',
    )

    db.session.add(fruit2)
    db.session.commit()

    # =====================================================

    fruit3 = Board_Item(
        item_type='Fruits',
        item_name='Wild Berries',
        item_image='https://freepngimg.com/thumb/berries/28851-1-berries-thumb.png',
        item_description="If we're honest, there's nothing wild about them. They're just berries",
        boldness='0.9',
        sharpness='4.1',
        saltiness='0.1',
        spiciness='0.1',
        sweetness='2.7',
    )

    db.session.add(fruit3)
    db.session.commit()

    # =====================================================

    fruit4 = Board_Item(
        item_type='Fruits',
        item_name='Luxardo Maraschino Cherries',
        item_image='https://applejack.com/site/images/Luxardo-Maraschino-Cherries_1.png',
        item_description="Grab a few of these before plating and fix yourself a mean old fashioned",
        boldness='2.3',
        sharpness='2.2',
        saltiness='0.1',
        spiciness='0.1',
        sweetness='3.8',
    )

    db.session.add(fruit4)
    db.session.commit()

    # =====================================================

    fruit5 = Board_Item(
        item_type='Fruits',
        item_name='Dried Apricots',
        item_image='https://www.nutfruit.org/images/consumer-fruit/1570535024-apricot.png',
        item_description="a delightful flavor full of tropical sunshine",
        boldness='3.1',
        sharpness='1.2',
        saltiness='0.6',
        spiciness='0.1',
        sweetness='3.7',
    )

    db.session.add(fruit5)
    db.session.commit()

    # =====================================================

    fruit6 = Board_Item(
        item_type='Fruits',
        item_name='Mixed Olives',
        item_image='https://cdn.shopify.com/s/files/1/1529/5227/products/TCS_Provision-spanishOlives_1024x684_aebe5cf8-d5bd-410f-8562-defba611cc7e_1024x1024.png?v=1542757765',
        item_description="A grocer’s choice. It's pitted, so no one has to call the dentist (because they are not real doctors)",
        boldness='3.4',
        sharpness='1.7',
        saltiness='2.4',
        spiciness='0.3',
        sweetness='1.6',
    )

    db.session.add(fruit6)
    db.session.commit()

    # =====================================================

    fruit7 = Board_Item(
        item_type='Fruits',
        item_name='Cornichons',
        item_image='http://assets.stickpng.com/images/5eafeccaf7f4540004b715e8.png',
        item_description='Stop calling it "those tiny pickled cucumber thingies". we\'re going to quiz you on this',
        boldness='0.2',
        sharpness='4.1',
        saltiness='3.2',
        spiciness='0.8',
        sweetness='3.6',
    )

    db.session.add(fruit7)
    db.session.commit()

    # =====================================================

    fruit8 = Board_Item(
        item_type='Fruits',
        item_name='Artichoke Hearts',
        item_image='https://lotsa.com/wp-content/uploads/2018/02/artichoke-hearts-300x297.png',
        item_description="A light, punchy palate cleanser strong enough to cut through the fat from meat and cheese",
        boldness='1.6',
        sharpness='3.5',
        saltiness='1.3',
        spiciness='0.6',
        sweetness='1.7',
    )

    db.session.add(fruit8)
    db.session.commit()

    # =====================================================

  # Nuts =================================================

    nut1 = Board_Item(
        item_type='Nuts',
        item_name='Marcona Almonds',
        item_image='https://woodlandfoods.com/img/WF_Images/N44-nuts-marcona-almonds-main.jpg',
        item_description="Trust us, this is the almond you want; nuttier, perfectly seasoned crunch without dry almond aftertaste",
        boldness='4.1',
        sharpness='0.9',
        saltiness='3.6',
        spiciness='0.1',
        sweetness='2.8',
    )

    db.session.add(nut1)
    db.session.commit()

    # =====================================================

    nut2 = Board_Item(
        item_type='Nuts',
        item_name='Praline Pecans',
        item_image='http://cdn.shopify.com/s/files/1/2507/9278/products/WataNut-PralinePecans-bowl_600x.png?v=1510236928',
        item_description="People may (by may we mean always) argue about the pronunciation, but we can all agree that this is delicious",
        boldness='4.1',
        sharpness='0.9',
        saltiness='1.3',
        spiciness='0.1',
        sweetness='4.0',
    )

    db.session.add(nut2)
    db.session.commit()

    # =====================================================

    nut3 = Board_Item(
        item_type='Nuts',
        item_name='Pistachios',
        item_image='http://assets.stickpng.com/images/580b57fcd9996e24bc43c1d6.png',
        item_description="Pro tip: wedge in a loose shell between the cracks and use it as a crowbar. Let the Physics do the work",
        boldness='3.7',
        sharpness='1.2',
        saltiness='3.9',
        spiciness='0.1',
        sweetness='1.7',
    )

    db.session.add(nut3)
    db.session.commit()

    # =====================================================

    nut4 = Board_Item(
        item_type='Nuts',
        item_name='Hazelnuts',
        item_image='https://e1.pngegg.com/pngimages/476/408/png-clipart-autumn-hazelnut.png',
        item_description="An irresistably toasty goodness with an intoxicating fragrance",
        boldness='4.6',
        sharpness='0.2',
        saltiness='0.4',
        spiciness='0.1',
        sweetness='1.6',
    )

    db.session.add(nut4)
    db.session.commit()

    # =====================================================

    nut5 = Board_Item(
        item_type='Nuts',
        item_name='Macadamia Nuts',
        item_image='https://img.favpng.com/25/4/10/macadamia-oil-macadamia-nut-tree-nut-allergy-png-favpng-NtD4Qsn3au4gZX7uZg5A2E0wk.jpg',
        item_description="Imported exclusively from Hawaiian airport's duty-free outlet where your newlywed friend bought all of her souvinir gifts for her friends",
        boldness='4.2',
        sharpness='0.9',
        saltiness='1.4',
        spiciness='0.1',
        sweetness='3.6',
    )

    db.session.add(nut5)
    db.session.commit()

    # =====================================================

    nut6 = Board_Item(
        item_type='Nuts',
        item_name='Cashews',
        item_image='https://lh3.googleusercontent.com/proxy/9-PBEwbmmRp9oRyAfOxkALXmzZUaSWOZfMKdXQSNWAohlrT9J2renJZue7wNzhY0B503ILL9WM8JFjVfCtgikcy_PDgWhUsZ6duyXWthKH3rtaGR_pkuOIZ-hmb0KVDYQWvjRtY',
        item_description="For those who were forced to eat leftovers from a mixed-nut can, who ended up liking it",
        boldness='3.9',
        sharpness='0.9',
        saltiness='3.7',
        spiciness='0.1',
        sweetness='0.8',
    )

    db.session.add(nut6)
    db.session.commit()

    # =====================================================

    nut7 = Board_Item(
        item_type='Nuts',
        item_name='Chocolate Peanuts',
        item_image='https://w7.pngwing.com/pngs/57/57/png-transparent-chocolate-coated-peanut-white-chocolate-salty-liquorice-macaroon-chocolate-food-peanut-superfood.png',
        item_description="Please don't order this if you have a peanut allergy, pretty please",
        boldness='3.7',
        sharpness='0.9',
        saltiness='1.6',
        spiciness='0.1',
        sweetness='3.7',
    )

    db.session.add(nut7)
    db.session.commit()

    # =====================================================

    nut8 = Board_Item(
        item_type='Nuts',
        item_name='Yogurt Almonds',
        item_image='https://www.nutstop.com/wp-content/uploads/2015/06/Yogurt-Almonds-Nutstop.jpg',
        item_description="There's a reason why trail mix has these guys in it...",
        boldness='3.6',
        sharpness='1.2',
        saltiness='1.6',
        spiciness='0.1',
        sweetness='3.8',
    )

    db.session.add(nut8)
    db.session.commit()

    # =====================================================

  # Spread ===============================================

    spread1 = Board_Item(
        item_type='Spreads',
        item_name='Spicy Honey',
        item_image='http://pngimg.com/uploads/honey/honey_PNG86308.png',
        item_description="A rich, glossy and sweet glue with a an interesting, lively kick",
        boldness='3.7',
        sharpness='1.1',
        saltiness='0.1',
        spiciness='3.4',
        sweetness='4.2',
    )

    db.session.add(spread1)
    db.session.commit()

    # =====================================================

    spread2 = Board_Item(
        item_type='Spreads',
        item_name='Truffle Olive Oil',
        item_image='https://www.laquintaoliveoilcompany.com/wp-content/uploads/2018/03/WhitetruffleOO.png',
        item_description="It's amazing how a few drops of these on everything elevates the flavor to the next level",
        boldness='4.8',
        sharpness='0.6',
        saltiness='0.4',
        spiciness='0.4',
        sweetness='1.6',
    )

    db.session.add(spread2)
    db.session.commit()

    # =====================================================

    spread3 = Board_Item(
        item_type='Spreads',
        item_name='Orange Marmalade',
        item_image='https://img.favpng.com/18/21/13/jam-bonne-maman-canning-strawberry-marmalade-png-favpng-7YLkW39FtkdkTsPWGPzj4ge1u.jpg',
        item_description="A bit breakfasty, but trust its bright, bitter and sweet awesomeness",
        boldness='2.8',
        sharpness='3.1',
        saltiness='1.1',
        spiciness='0.9',
        sweetness='4.2',
    )

    db.session.add(spread3)
    db.session.commit()

    # =====================================================

    spread4 = Board_Item(
        item_type='Spreads',
        item_name='Fig Jam',
        item_image='https://lh3.googleusercontent.com/proxy/EP2ch_2qaMHG8UJfxl7RZdcGBUB_UkNEEYLSO201E74IGkZCaE0bH9Akw9d-G9sUTyTFMRZ-mttUIuBSkDEkvcqehFrD2OMR9A',
        item_description="A charchuterie classic, nice blend of savory and sweet",
        boldness='3.2',
        sharpness='1.7',
        saltiness='3.6',
        spiciness='0.4',
        sweetness='3.9',
    )

    db.session.add(spread4)
    db.session.commit()

    # =====================================================

    spread5 = Board_Item(
        item_type='Spreads',
        item_name='Sun-dried Tomato Puree',
        item_image='https://cdn.imgbin.com/1/8/9/imgbin-sun-dried-tomato-pasta-p-t-tomato-paste-tomato-6H4U2UBepAcTjUZmGVNpFGhgi.jpg',
        item_description="A touch of this on any greasy meats and/or cheeses will transform your ensemble into very Italian hors d'oeuvres",
        boldness='3.2',
        sharpness='3.1',
        saltiness='3.2',
        spiciness='2.7',
        sweetness='2.2',
    )

    db.session.add(spread5)
    db.session.commit()

    # =====================================================

    spread6 = Board_Item(
        item_type='Spreads',
        item_name='Dijon Mustard',
        item_image='https://w7.pngwing.com/pngs/962/990/png-transparent-french-cuisine-maille-dijon-mustard-dijon-mustard-mustard-oil-seasoning-vinegar-mustard-oil.png',
        item_description="Mustard spiciness is the perfect way to bring orders back to your board, without overpowering richness",
        boldness='2.7',
        sharpness='4.1',
        saltiness='1.8',
        spiciness='4.4',
        sweetness='3.2',
    )

    db.session.add(spread6)
    db.session.commit()

    # =====================================================

    spread7 = Board_Item(
        item_type='Spreads',
        item_name='Caramelized Onion Jam',
        item_image='https://cdn.shopify.com/s/files/1/0299/8150/7716/products/0owJjXT0RxCXizu7qzCt_Untitled_design_-_2020-05-27T150633.839_2048x.png?v=1591287538',
        item_description="A quintessential sweet and savory jam with rich vegetable tastes",
        boldness='3.7',
        sharpness='2.7',
        saltiness='3.8',
        spiciness='1.9',
        sweetness='3.8',
    )

    db.session.add(spread7)
    db.session.commit()

    # =====================================================

    spread8 = Board_Item(
        item_type='Spreads',
        item_name='Guacamole',
        item_image='https://banner2.cleanpng.com/20190618/ajp/kisspng-guacamole-salsa-mexican-cuisine-chipotle-mexican-g-chipotle-avocado-5d08679cb62091.449091281560831900746.jpg',
        item_description="Least traditional, but it's all about emulsion. Perfect choice to explore new flavor horizon",
        boldness='4.1',
        sharpness='3.1',
        saltiness='3.1',
        spiciness='3.7',
        sweetness='2.1',
    )

    db.session.add(spread8)
    db.session.commit()

    # =====================================================

def undo_board_items():
    db.session.execute('TRUNCATE board_items CASCADE;')
    db.session.commit()
