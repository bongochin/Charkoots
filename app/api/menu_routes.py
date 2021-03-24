from flask import Blueprint, jsonify, request
from app.models import db, Board_Item1, Board_Item4, Board_Item7, Board_Item8, Board_Item9, Board_Item10

menu_routes = Blueprint('menus', __name__)

# Board Items ========================================

# Retrieve All Board Items
@menu_routes.route('/')
def boardItems():
    get_boardItems = Board_Item1.query.all() + Board_Item4.query.all() + \
        Board_Item7.query.all() + Board_Item8.query.all() + \
        Board_Item9.query.all() + Board_Item10.query.all()
    return jsonify([boardItems.to_dict() for boardItems in get_boardItems])

# Retrieve All 'Meats'
@menu_routes.route('/meats')
def meats():
  get_meats = Board_Item1.query.all()
  return jsonify(([meat.to_dict() for meat in get_meats]))

# Retrieve All 'Cheeses'
@menu_routes.route('/cheeses')
def cheeses():
  get_cheeses = Board_Item4.query.all()
  return jsonify(([cheese.to_dict() for cheese in get_cheeses]))

# Retrieve All 'Crackers'
@menu_routes.route('/crackers')
def crackers():
  get_crackers = Board_Item7.query.all()
  return jsonify(([cracker.to_dict() for cracker in get_crackers]))

# Retrieve All 'Fruits'
@menu_routes.route('/fruits')
def fruits():
  get_fruits = Board_Item8.query.all()
  return jsonify(([fruit.to_dict() for fruit in get_fruits]))

# Retrieve All 'Nuts'
@menu_routes.route('/nuts')
def nuts():
  get_nuts = Board_Item9.query.all()
  return jsonify(([nut.to_dict() for nut in get_nuts]))

# Retrieve All 'Spreads'
@menu_routes.route('/spreads')
def spreads():
  get_spreads = Board_Item10.query.all()
  return jsonify(([spread.to_dict() for spread in get_spreads]))
