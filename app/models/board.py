from .db import db

class Board(db.Model):

  __tablename__ = 'boards'

  id = db.Column(db.Integer, primary_key=True)
  board_name = db.Column(db.String(50), nullable=False)
  board_description = db.Column(db.Text, nullable=False)
  board_cost = db.Column(db.Float, nullable=False)
  meat1 = db.Column(db.Integer, db.ForeignKey('board_items.id'), nullable=False)
  # meat2 = db.Column(db.Integer, db.ForeignKey('board_items.id'), nullable=False)
  # meat3 = db.Column(db.Integer, db.ForeignKey('board_items.id'), nullable=False)
  # cheese1 = db.Column(db.Integer, db.ForeignKey('board_items.id'), nullable=False)
  # cheese2 = db.Column(db.Integer, db.ForeignKey('board_items.id'), nullable=False)
  # cheese3 = db.Column(db.Integer, db.ForeignKey('board_items.id'), nullable=False)
  # cracker = db.Column(db.Integer, db.ForeignKey('board_items.id'), nullable=False)
  # fruit = db.Column(db.Integer, db.ForeignKey('board_items.id'), nullable=False)
  # nut = db.Column(db.Integer, db.ForeignKey('board_items.id'), nullable=False)
  # spread = db.Column(db.Integer, db.ForeignKey('board_items.id'), nullable=False)


  # Board has a single Order
  order = db.relationship('Order', back_populates='board')

  # Board has many Board_Items
  board_items = db.relationship('Board_Item', back_populates='board')

  def to_dict(self):
    return {
      'id': self.id,
      'board_name': self.board_name,
      'board_description': self.board_description,
      'board_cost': self.board_cost,
      'meat1': self.meat1,
      'meat2': self.meat2,
      'meat3': self.meat3,
      'cheese1': self.cheese1,
      'cheese2': self.cheese2,
      'cheese3': self.cheese3,
      'cracker': self.cracker,
      'fruit': self.fruit,
      'nut': self.nut,
      'spread': self.spread
    }
