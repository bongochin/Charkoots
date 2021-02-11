from flask.cli import AppGroup
from .users import seed_users, undo_users
from .board_items import seed_board_items, undo_board_items
from .wines import seed_wines, undo_wines
from .boards import seed_boards, undo_boards
from .orders import seed_orders, undo_orders

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_board_items()
    seed_wines()
    seed_boards()
    seed_orders()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_orders()
    undo_boards()
    undo_wines()
    undo_board_items()
    undo_users()
    # Add other undo functions here
