import sqlite3


class Database():

    def query_all(self, sql):
        con = sqlite3.connect('C:\\GitHub\\cmsc-495\\src\\database\\db.db')
        return con.execute(sql).fetchall()

    def query_all(self, sql, params):
        con = sqlite3.connect('C:\\GitHub\\cmsc-495\\src\\database\\db.db')
        return con.execute(sql, params).fetchall()

    def query_single(self, sql, params):
        con = sqlite3.connect('C:\\GitHub\\cmsc-495\\src\\database\\db.db')
        return con.execute(sql, params).fetchone()

    def execute(self, sql, params):
        con = sqlite3.connect('C:\\GitHub\\cmsc-495\\src\\database\\db.db')
        cur = con.cursor()
        cur.execute(sql, params)
        con.commit()
        return cur.lastrowid