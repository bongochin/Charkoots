from .db import db

class Board(db.Model):

  __tablename__ = 'boards'

  id = db.Column(db.Integer, primary_key=True)
  board_name = db.Column(db.String(50), nullable=False)
  board_description = db.Column(db.Text, nullable=False)
  board_cost = db.Column(db.Float, nullable=False)
  meat1 = db.Column(db.Integer, db.ForeignKey('board_items1.id'), nullable=False)
  meat2 = db.Column(db.Integer, db.ForeignKey('board_items2.id'), nullable=False)
  meat3 = db.Column(db.Integer, db.ForeignKey('board_items3.id'), nullable=False)
  cheese1 = db.Column(db.Integer, db.ForeignKey('board_items4.id'), nullable=False)
  cheese2 = db.Column(db.Integer, db.ForeignKey('board_items5.id'), nullable=False)
  cheese3 = db.Column(db.Integer, db.ForeignKey('board_items6.id'), nullable=False)
  cracker = db.Column(db.Integer, db.ForeignKey('board_items7.id'), nullable=False)
  fruit = db.Column(db.Integer, db.ForeignKey('board_items8.id'), nullable=False)
  nut = db.Column(db.Integer, db.ForeignKey('board_items9.id'), nullable=False)
  spread = db.Column(db.Integer, db.ForeignKey('board_items10.id'), nullable=False)


  # Board has a single Order
  order = db.relationship('Order', back_populates='board')

  # Board has many Board_Items
  board_items1 = db.relationship('Board_Item1', back_populates='board')
  board_items2 = db.relationship('Board_Item2', back_populates='board')
  board_items3 = db.relationship('Board_Item3', back_populates='board')
  board_items4 = db.relationship('Board_Item4', back_populates='board')
  board_items5 = db.relationship('Board_Item5', back_populates='board')
  board_items6 = db.relationship('Board_Item6', back_populates='board')
  board_items7 = db.relationship('Board_Item7', back_populates='board')
  board_items8 = db.relationship('Board_Item8', back_populates='board')
  board_items9 = db.relationship('Board_Item9', back_populates='board')
  board_items10 = db.relationship('Board_Item10', back_populates='board')

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
