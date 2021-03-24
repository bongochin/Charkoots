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

@menu_routes.route('/meats')
def meats():
  get_meats = Board_Item1.query.all()
  return jsonify(([meat.to_dict() for meat in get_meats]))
