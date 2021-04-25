import sqlite3


class Database():

    def __init__(self, connection):
        self.connection = connection

    def query_all(self, sql):
        con = sqlite3.connect(self.connection)
        return con.execute(sql).fetchall()

    def query_all(self, sql, params):
        con = sqlite3.connect('C:\\GitHub\\cmsc-495\\src\\database\\db.db')
        return con.execute(sql, params).fetchall()

    def query_single(self, sql, params):
        con = sqlite3.connect(self.connection)
        return con.execute(sql, params).fetchone()

    def execute(self, sql, params):
        con = sqlite3.connect(self.connection)
        cur = con.cursor()
        cur.execute(sql, params)
        con.commit()
        return cur.lastrowid