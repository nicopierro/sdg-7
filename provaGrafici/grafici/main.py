from flask import Flask
from flask import send_file
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config["MONGO_URI"] = "mongodb+srv://sloth:mSCW5mKaiJOuABCG@cluster0.nljzd.mongodb.net/SDG7?retryWrites=true&w=majority"
mongo = PyMongo(app)

@app.route("/linee", methods=['GET'])
# Generic Python function that returns books.json
def linee():
    ea = mongo.db.ElectricityAccess
    output = [] 
    for s in ea.find().limit(100):
        output.append(s['Entity'])
    return jsonify({'result': output})

# Checks to see if the name of the package is the run as the main package.
if __name__ == "__main__":
    # Runs the Flask application only if the main.py file is being run.
    app.run(debug=True, port=4000)