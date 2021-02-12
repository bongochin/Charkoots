from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Board, Board_Item
from app.forms.board_form import BoardForm

board_routes = Blueprint('boards', __name__)

## Boards =============================================

# Retrieve All Boards
@board_routes.route('/')
# @login_required
def boards():
  boards = Board.query.all()
  return jsonify([board.to_dict() for board in boards])

# Retrieve Single Board
@board_routes.route('/<int:id>')
# @login_required
def board(id):
  board = Board.query.get(id)
  return board.to_dict()

# Create a Board
@board_routes.route('/', methods=["POST"])
# @login_required
def post_board():
  form = BoardForm() # need to build a form
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    new_board =Board()
    form.populate_obj(new_board)
    db.session.add(new_board)
    db.session.commit()
    return new_board.to_dict()
  return {"errors": "Error occured"}

# Edit a Board
@board_routes.route('/<int:id>', methods=["PUT"])
# @login_required
def put_board(id):
  board = Board.query.get(id)

  if "board_name" in request.json:
    board.board_name = request.json["board_name"]
  if "board_description" in request.json:
    board.board_description = request.json["board_description"]
  if "board_cost" in request.json:
    board.board_cost = request.json["board_cost"]
  if "meat1" in request.json:
    board.meat1 = request.json["meat1"]
  if "meat2" in request.json:
    board.meat2 = request.json["meat2"]
  if "meat3" in request.json:
    board.meat3 = request.json["meat3"]
  if "cheese1" in request.json:
    board.cheese1 = request.json["cheese1"]
  if "cheese2" in request.json:
    board.cheese2 = request.json["cheese2"]
  if "cheese3" in request.json:
    board.cheese3 = request.json["cheese3"]
  if "cracker" in request.json:
    board.cracker = request.json["cracker"]
  if "fruit" in request.json:
    board.fruit = request.json["fruit"]
  if "nut" in request.json:
    board.nut = request.json["nut"]
  if "spread" in request.json:
    board.spread = request.json["spread"]
  db.session.commit()

  return {"message": "success"}

  # Delete a Board
  @board_routes.route('/<int:id>', methods=["DELETE"])
  # @login_required
  def delete_board(id):
    board = Board.query.get(id)
    db.session.delete(board)
    db.session.commit()
    return {"message": "success"}
