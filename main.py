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


@app.route("/AccessToElectricity2010vs2019", methods=['GET'])
def accessToElectricity2010vs2019():
    ate20102019 = mongo.db.AccessToElectricity2010vs2019
    result = list(ate20102019.find({}, {"_id": 0}))
    return jsonify(result)


@app.route("/ElectricityAccess/<int:anno>", methods=['GET'])
def electrictyAccess(anno):
    ea = mongo.db.ElectricityAccess
    query = [{
        "$match": {"Year": { "$lte" : anno}}},
        {
        "$group": {
            "_id": "$Entity",
            "years": {"$push": {'year': "$Year", 'electricity': '$Electricity'}},
        }}]
    result = list(ea.aggregate(query))
    return jsonify(result)


@app.route("/SharedElectricitySource", methods=['GET'])
def SharedElectricitySource():
    ses = mongo.db.SharedElectricitySource
    query = {
        'Entity': 'World'
    }
    result = list(ses.find(query, {"_id": 0}).sort('Year'))
    return jsonify(result)


# Checks to see if the name of the package is the run as the main package.
if __name__ == "__main__":
    # Runs the Flask application only if the main.py file is being run.
    app.run(port=5000)
