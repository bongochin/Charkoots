from .db import db
from .user import User

class Wine(db.Model):

  __tablename__ = 'wines'

  id = db.Column(db.Integer, primary_key=True)
  wine_type = db.Column(db.String(50), nullable=False)
  wine_name = db.Column(db.String(200), nullable=False)
  wine_image = db.Column(db.String, default="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg")
  wine_description = db.Column(db.Text, nullable=False)
  wine_cost = db.Column(db.Float, nullable=False)
  boldness = db.Column(db.Float, default=0)
  sharpness = db.Column(db.Float, default=0)
  saltiness = db.Column(db.Float, default=0)
  spiciness = db.Column(db.Float, default=0)
  sweetness = db.Column(db.Float, default=0)


  # Wine is related to a single order
  order = db.relationship('Order', back_populates='wine')

  def to_dict(self):
    return {
      'id': self.id,
      'wine_type': self.item_type,
      'wine_name': self.item_name,
      'wine_image': self.item_image,
      'wine_description': self.item_description,
      'boldness': self.boldness,
      'sharpness': self.sharpness,
      'saltiness': self.saltiness,
      'spiciness': self.spiciness,
      'sweetness': self.sweetness
    }
