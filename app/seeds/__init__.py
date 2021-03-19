from flask.cli import AppGroup
from .users import seed_users, undo_users
from .board_items1 import seed_board_items1, undo_board_items1
from .board_items2 import seed_board_items2, undo_board_items2
from .board_items3 import seed_board_items3, undo_board_items3
from .board_items4 import seed_board_items4, undo_board_items4
from .board_items5 import seed_board_items5, undo_board_items5
from .board_items6 import seed_board_items6, undo_board_items6
from .board_items7 import seed_board_items7, undo_board_items7
from .board_items8 import seed_board_items8, undo_board_items8
from .board_items9 import seed_board_items9, undo_board_items9
from .board_items10 import seed_board_items10, undo_board_items10
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
    seed_board_items1()
    seed_board_items2()
    seed_board_items3()
    seed_board_items4()
    seed_board_items5()
    seed_board_items6()
    seed_board_items7()
    seed_board_items8()
    seed_board_items9()
    seed_board_items10()
    seed_wines()
    seed_boards()
    seed_orders()

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_orders()
    undo_boards()
    undo_wines()
    seed_board_items1()
    seed_board_items2()
    seed_board_items3()
    seed_board_items4()
    seed_board_items5()
    seed_board_items6()
    seed_board_items7()
    seed_board_items8()
    seed_board_items9()
    seed_board_items10()
    undo_users()
