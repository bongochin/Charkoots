from .db import db

class Board_Item(db.Model):

  __tablename__ = 'board_items'

  id = db.Column(db.Integer, primary_key=True)
  item_type = db.Column(db.String(50), nullable=False)
  item_name = db.Column(db.String(50), nullable=False)
  item_image = db.Column(db.String, default="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg")
  item_description = db.Column(db.Text, nullable=False)
  boldness = db.Column(db.Integer, default=0)
  sharpness = db.Column(db.Integer, default=0)
  saltiness = db.Column(db.Integer, default=0)
  spiciness = db.Column(db.Integer, default=0)
  sweetness = db.Column(db.Integer, default=0)


  # Board Item is related to a board
  board = db.relationship('Board', back_populates='board_items')

  def to_dict(self):
    return {
      'id': self.id,
      'item_type': self.item_type,
      'item_name': self.item_name,
      'item_image': self.item_image,
      'item_description': self.item_description,
      'boldness': self.boldness,
      'sharpness': self.sharpness,
      'saltiness': self.saltiness,
      'spiciness': self.spiciness,
      'sweetness': self.sweetness
    }
