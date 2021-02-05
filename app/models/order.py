from .db import db
from .user import User

class Order(db.Model):

  __tablename__ = 'orders'

  id = db.Column(db.Integer, primary_key=True)
  board_id = db.Column(db.Integer, db.ForeignKey('boards.id'), nullable=False)
  wine_id = db.Column(db.Integer, db.ForeignKey('wines.id'), nullable=False)
  shipping_address1 = db.Column(db.String(255), nullable = False)
  shipping_address2 = db.Column(db.String(255), nullable = False)
  shipping_city = db.Column(db.String(50), nullable = False)
  shipping_state = db.Column(db.String(2), nullable = False)
  shipping_zipcode = db.Column(db.Integer(5), nullable = False)

  # Order has a single board
  board = db.relationship('Board', back_populates='orders')

  # Order has a single wine
  wine = db.relationship('Wine', back_populates='orders')

  def to_dict(self):
    return {
      'id': self.id,
      'board_id': self.board_id,
      'wine_id': self.wine_id,
      'shipping_address1': self.shipping_address1,
      'shipping_address2': self.shipping_address2,
      'shipping_city': self.shipping_city,
      'shipping_state': self.shipping_state,
      'shipping_zipcode': self.shipping_zipcode
    }
