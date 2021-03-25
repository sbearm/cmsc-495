import sqlite3


class Database():

    def query_all(self, sql):
        con = sqlite3.connect('../database/db.db')
        return con.execute(sql).fetchall()

    def query_single(self, sql, params):
        con = sqlite3.connect('../database/db.db')
        return con.execute(sql, params).fetchone()
