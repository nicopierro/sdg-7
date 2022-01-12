from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson.json_util import dumps, loads

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://sloth:mSCW5mKaiJOuABCG@cluster0.nljzd.mongodb.net/SDG7?retryWrites=true&w=majority"

CORS(app)
mongo = PyMongo(app)

@app.route("/")
# Generic Python functino that returns "Hello world!"
def index():
    return "Hello world!"

@app.route("/linee", methods=['GET'])
def linee():
    ea = mongo.db.ElectricityAccess
    list_cur = list(ea.find({},{"_id":0}))
    return dumps(list_cur)

# Checks to see if the name of the package is the run as the main package.
if __name__ == "__main__":
    # Runs the Flask application only if the main.py file is being run.
    app.run(port=5000)