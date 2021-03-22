import sqlite3

class Database():

  def __init__(self):
    self.con = sqlite3.connect('db.db')
    self.cur = con.cursor()

  def query(self, sql):
    print sql
    return self.cur.execute(sql).fetchall()
