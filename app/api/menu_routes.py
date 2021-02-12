from flask import Blueprint, jsonify, request
from app.models import db, Board_Item
from sqlalchemy import func

menu_routes = Blueprint('menus', __name__)

## Board Items ========================================

# Retrieve All Board Items
@menu_routes.route('/')
def board_items():
  board_items = Board_Item.query.all()
  return jsonify([board_item.to_dict() for board_item in board_items])

# Retrieve Board Items per Type
@menu_routes.route('/<id>')
def items_by_type(id):
  item_types = Board_Item.query.filter(func.lower(Board_Item.item_type) == id).all()
  return jsonify([item_type.to_dict() for item_type in item_types])
