from .db import db

class User_Order(db.Model):

  __tablename__ = 'users_orders'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  order_id = db.Column(db.Integer, db.ForeignKey('orders.id'), nullable=False)


  def to_dict(self):
    return {
      'id': self.id,
      'user_id': self.user_id,
      'order_id': self.order_id
    }
