from app.models import db, Wine

def seed_wines():
# Reds ================================================

  red1 = Wine(
        wine_type='Red, Cabernet Sauvignon',
        wine_name='Orin Swift Eight Years In The Desert 2018',
        wine_image='https://images.vivino.com/thumbs/Idmjm47oRtWK85oWJpRjgA_pb_x600.png',
        wine_description='Blackberry > Vanilla > Cherry',
        wine_cost=38.39,
        boldness=4.8,
        sharpness=3.2,
        saltiness=4.2,
        spiciness=0.9,
        sweetness=3.5,
    )

  db.session.add(red1)
  db.session.commit()

  # =====================================================

  red2 = Wine(
        wine_type='Red, Cabernet Blend',
        wine_name='Gitana Lupi Rezerva 2016',
        wine_image='https://images.vivino.com/thumbs/mAgKArJST5i-NofFJQeqSA_pb_x600.png',
        wine_description='Vanilla > Plum > Leather',
        wine_cost=32.99,
        boldness=4.7,
        sharpness=3.5,
        saltiness=4.2,
        spiciness=0.9,
        sweetness=3.5,
    )

  db.session.add(red2)
  db.session.commit()

  # =====================================================

  red3 = Wine(
        wine_type='Red, Berdeaux Blend',
        wine_name='Château Prieurs de la Commanderie Pomerol 2014',
        wine_image='https://images.vivino.com/thumbs/QRQm5yweS1Sh3GNd1zriog_pb_x600.png',
        wine_description='A small-production treasure with a brilliant taste. It\'s your favorite indie band that you don\'t want them to get famous. Earthy > Oak > Red Fruit',
        wine_cost=34.99,
        boldness=4.8,
        sharpness=3.2,
        saltiness=4.2,
        spiciness=0.9,
        sweetness=3.5,
    )

  db.session.add(red3)
  db.session.commit()

  # =====================================================

  red4 = Wine(
        wine_type='Red, Syrah',
        wine_name='Alto Moncayo Garnacha 2017',
        wine_image='https://images.vivino.com/thumbs/zn3ggvroQZuY1eb46GLKOw_pb_x600.png',
        wine_description='Bold enough to handle even the funkiest Charkoot boards, with a smooth, balanced acidic taste. There\'s nothing subtle about this wine! Vanilla > Blackberry > Smoke',
        wine_cost=39.95,
        boldness=4.8,
        sharpness=3.2,
        saltiness=4.2,
        spiciness=0.9,
        sweetness=3.5,
    )

  db.session.add(red4)
  db.session.commit()

  # =====================================================

  red5 = Wine(
        wine_type='Red, Malbec',
        wine_name='El Enemigo Malbec 2017',
        wine_image='https://images.vivino.com/thumbs/S0m-9WKZRfKqjuvZbpy8Vg_pb_x600.png',
        wine_description='Chocolate > Plum > Leather',
        wine_cost=21.99,
        boldness=4.8,
        sharpness=3.2,
        saltiness=4.2,
        spiciness=0.9,
        sweetness=3.5,
    )

  db.session.add(red5)
  db.session.commit()

  # =====================================================

  red6 = Wine(
        wine_type='Red, Zinfandel',
        wine_name='60 Sessantanni Old Vines Primitivo di Manduria 2015',
        wine_image='https://images.vivino.com/thumbs/tLtS1VwaRxCL25zZ-j6pZg_pb_x600.png',
        wine_description='Considered one of the best wines from the Heel of Italy, this vintage is known for an exceptional balance of full-bodied, soft tannins that\'s perfect with any combination. Vanilla > Plum > Cherry',
        wine_cost=34.99,
        boldness=4.8,
        sharpness=3.2,
        saltiness=4.2,
        spiciness=0.9,
        sweetness=3.5,
    )

  db.session.add(red6)
  db.session.commit()

  # =====================================================

  red7 = Wine(
        wine_type='Red, Pinot Noir',
        wine_name='Penner-Ash Eola-Amity Hills Pinot Noir 2016',
        wine_image='https://images.vivino.com/thumbs/mJ11tYNoSQ28isUb5B0q5A_pb_x600.png',
        wine_description='Oregon\'s finest wine maker, with their finest vintage. Oak > Charcoal > Raspberry',
        wine_cost=34.99,
        boldness=4.8,
        sharpness=3.2,
        saltiness=4.2,
        spiciness=0.9,
        sweetness=3.5,
    )

  db.session.add(red7)
  db.session.commit()

  # =====================================================

  red8 = Wine(
        wine_type='Red, Pinot Noir',
        wine_name='Synthesis Pinot Noir 2017',
        wine_image='https://images.vivino.com/thumbs/282sdcyuQ7iFkGFXycQuwA_pb_x600.png',
        wine_description='Russian River Valley, Tobacco > Cherry > Ginger',
        wine_cost=38.99,
        boldness=4.8,
        sharpness=3.2,
        saltiness=4.2,
        spiciness=0.9,
        sweetness=3.5,
    )

  db.session.add(red8)
  db.session.commit()

# Whites ==============================================

  white1 = Wine(
        wine_type='White, Chardonnay',
        wine_name='El Enemigo Chardonnay 2018',
        wine_image='https://images.vivino.com/thumbs/yiVgwCBHQbm5XlZ0W8INOA_pb_x600.png',
        wine_description='Oat > Pear > Grapefruit',
        wine_cost=23.95,
        boldness=4.8,
        sharpness=3.2,
        saltiness=4.2,
        spiciness=0.9,
        sweetness=3.5,
    )

  db.session.add(white1)
  db.session.commit()

  # =====================================================

  white2 = Wine(
        wine_type='White, Chardonnay',
        wine_name='Hanzell Chardonnay 2015',
        wine_image='https://images.vivino.com/thumbs/M3egNRrUSt6B2mr9rp0woQ_pb_x600.png',
        wine_description='Oak > Apple > Citrus',
        wine_cost=39.99,
        boldness=4.8,
        sharpness=3.2,
        saltiness=4.2,
        spiciness=0.9,
        sweetness=3.5,
    )

  db.session.add(white2)
  db.session.commit()

  # =====================================================

  white3 = Wine(
        wine_type='White, Chardonnay',
        wine_name='Gilles Noblet La Collonge Mâcon-Fuissé 2018',
        wine_image='https://images.vivino.com/thumbs/EA-rCcQjS36V8qIzA2LDnA_pb_x600.png',
        wine_description='Apple > Butter > Lemon',
        wine_cost=30.99,
        boldness=4.8,
        sharpness=3.2,
        saltiness=4.2,
        spiciness=0.9,
        sweetness=3.5,
    )

  db.session.add(white3)
  db.session.commit()

  # =====================================================

  white4 = Wine(
        wine_type='White, Sauvignon Blanc',
        wine_name='Merry Edwards Russian River Valley 2018',
        wine_image='https://images.vivino.com/thumbs/282sdcyuQ7iFkGFXycQuwA_pb_x600.png',
        wine_description='Peach > Citrus > Butter',
        wine_cost=34.99,
        boldness=4.8,
        sharpness=3.2,
        saltiness=4.2,
        spiciness=0.9,
        sweetness=3.5,
    )

  db.session.add(white4)
  db.session.commit()

  # =====================================================

  white5 = Wine(
        wine_type='White, Pinot Grigio',
        wine_name='Vie di Romans Dessimis Pinot Grigio 2017',
        wine_image='https://images.vivino.com/thumbs/c0GvjTHITb-ouPSlKUpczA_pb_x600.png',
        wine_description='This is the hardest wine to get paired, given the nature of our pairing algorithm. You have an delicate taste buds! I respect that. Peach > Orange > Oak',
        wine_cost=39.99,
        boldness=4.8,
        sharpness=3.2,
        saltiness=4.2,
        spiciness=0.9,
        sweetness=3.5,
    )

  db.session.add(white5)
  db.session.commit()

  # =====================================================

  white6 = Wine(
        wine_type='White, Riesling',
        wine_name='St. Urbans-Hof Nik Weis Selection Urban Riesling 2018',
        wine_image='https://images.vivino.com/thumbs/fv7i0MNdTa6KO9IxCk9YZg_pb_x600.png',
        wine_description='Perfect, sharp palate cleanser for pork and spice-forward dishes. Apple > Honey > Lime',
        wine_cost=14.99,
        boldness=4.8,
        sharpness=3.2,
        saltiness=4.2,
        spiciness=0.9,
        sweetness=3.5,
    )

  db.session.add(white6)
  db.session.commit()

  # =====================================================

  white7 = Wine(
        wine_type='White, Riesling',
        wine_name='Landhaus Mayer Riesling 2018',
        wine_image='https://images.vivino.com/thumbs/GmLIaXZKR5q2WualI8JUiw_pb_x600.png',
        wine_description='Similar wines usually cost triple of what we offer here. How do we do it? Easy, it\'s a demo. Citus > Green Apple > Minerals',
        wine_cost=21.99,
        boldness=4.8,
        sharpness=3.2,
        saltiness=4.2,
        spiciness=0.9,
        sweetness=3.5,
    )

  db.session.add(white7)
  db.session.commit()

  # =====================================================

  white8 = Wine(
        wine_type='White, Moscato',
        wine_name='Colterenzio (Schreckbichl) Pfefferer 2019',
        wine_image='https://images.vivino.com/thumbs/zufo4lZNQ-6j-RZk2vjnQw_pb_x600.png',
        wine_description='From one of the newest players in Alto Adige vinoculture, a tasty, prestigious, award-winning wine with impressive taste notes. Peach > Tropical > Grapefruit',
        wine_cost=17.99,
        boldness=4.8,
        sharpness=3.2,
        saltiness=4.2,
        spiciness=0.9,
        sweetness=3.5,
    )

  db.session.add(white8)
  db.session.commit()

  # =====================================================

def undo_wines():
  db.session.execute('TRUNCATE wines RESTART IDENTITY CASCADE;')
  db.session.commit()
