import pyodbc

class Database():

  def __init__(self, conn_str):
    self.conn_str = conn_str
    self.conn = pyodbc.connect(conn_str)
    self.conn.setencoding(encoding='utf-8')
  
  def query(self, sql):
    return self.conn.execute(sql).fetchall()